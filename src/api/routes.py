
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

#Rutas

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup_user():
    body = request.get_json(force=True)
    register_user =  User(email=body['email'], password=body['password'], is_active=True)
    db.session.add(register_user)
    db.session.commit()
    return jsonify(register_user.serialize()), 201
    


@api.route('/login', methods=['POST'])
def login():
    body=request.get_json(force=True)
    newuser=db.session.query(User).filter(User.email==body['email']).first()
    print(newuser.password)
    if newuser.password == body['password']:
        access_token = create_access_token(identity={'id': newuser.id})
        return jsonify(access_token),200
    else:
        return jsonify("ERROR USER NOT EXIST"),401

@api.route('/private',methods=["GET"])
@jwt_required()
def private():
    token= get_jwt_identity()
    newuser = User.query.get(token)
    return jsonify(newuser.serialize()),200