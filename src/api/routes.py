
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import User
from api.models.db import db
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

#Rutas

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup_user():
    body = request.get_json()
    hash_pass = encryp_pass(body['password'])
    register_user = User(email=body["email"], password=hash_pass, is_active=True)
    db.session.add(register_user)
    db.session.commit()

    if register_user is None:
        return jsonify('INTERNAL SERVER ERROR'), 500
    elif register_user == False:
        return jsonify('BAD REQUEST'), 400
    else:
        return jsonify(register_user.serialize()), 201

@api.route('/login', methods=['POST'])
def login():
    body=request.get_json(force=True)
    newuser=db.session.query(User).filter(User.email==body['email']).first()
    if newuser.password == body['password']:
        access_token=create_access_token(identity=newuser.id)
        return jsonify(access_token),200
    else:
        return jsonify("ERROR USER NOT EXIST"),401

 

@api.route('/private',methods=["GET"])
@jwt_required()
def private():
    token=get_jwt_identity()
    print(token)
    user=User.query.get(token)
    return jsonify(user.serialize()),200