import React from "react";
import {  Register  } from "../../Service/Users.js";
import { useHistory } from "react-router-dom";
import "./Signup.css"

let email = "";
let password = "";

const Signup = () =>{

    let history = useHistory();
    const handleChange = async (e) => {
        try {
            const user = {
                email: email,
                password: password
            }
            e.preventDefault()
            await Register(user)
            history.push("/Login")

        } catch { (err) => console.log(err) }

    };
    return(
        <div className="p-5 mt-5">
            <div className="Signup container mb-3 text-center text-white p-4">
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Indie+Flower&family=Montserrat:wght@300&family=Pacifico&family=Righteous&display=swap" rel="stylesheet"></link>
            <h3 className="text-center font-weight-bold mb-3">Signup</h3>
            <form onSubmit={handleChange}>
                <div>
                    <input
                    type="email"
                    className="form-control shadow-sm mb-3"
                    placeholder="Email"
                    onChange={(e) => {email = e.target.value;}}
                    ></input>
                </div>
    
                <div className="py-3">
                    <input
                        type="password"
                        className="form-control shadow-sm"
                        placeholder="Contraseña"
                        onChange={(e) => {password = e.target.value;}}
                    ></input>
                </div>
                
                <div className="p-3">
                    <button type="submit" className="btn btn-outline-success boton col-md-8">
                        Registrarse
                    </button>
                </div>
            </form>
            </div>
      </div>
    );
};
export default Signup;
