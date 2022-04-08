import React from "react";
import "./Signup.css"

const Signup = () =>{
    return(
        <div className="p-5 mt-5">
            <div className="Signup container mb-3 text-center text-white p-4">
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Indie+Flower&family=Montserrat:wght@300&family=Pacifico&family=Righteous&display=swap" rel="stylesheet"></link>
            <h3 className="text-center font-weight-bold mb-3">Signup</h3>
            <form>
                <div>
                    <input
                    type="email"
                    className="form-control shadow-sm mb-3"
                    id="input"
                    placeholder="Email"
                    name="email"
                    ></input>
                </div>
    
                <div className="py-3">
                    <input
                        type="password"
                        className="form-control shadow-sm"
                        id="input"
                        placeholder="Contraseña"
                        name="password"
                    ></input>
                </div>
                <div className="py-3">
                    <input
                        type="password"
                        className="form-control shadow-sm"
                        id="input"
                        placeholder="Repetir contraseña"
                        name="repeatpassword"
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
