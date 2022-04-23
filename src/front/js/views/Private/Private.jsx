import React from "react";

const Private = () =>{
    return(  
    <div id="body" className="container-fluid">
        {localStorage.length > 0 ?
        <div className="Signup-Login container mb-3 text-center"> 
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Indie+Flower&family=Montserrat:wght@300&family=Pacifico&family=Righteous&display=swap" rel="stylesheet"></link>
            <h5 className="text-white p-4">Bienvenido a su area privada</h5>
            <div className="botones">
                <button type="button" className="btn btn-outline-success boton d-block mb-4 col-md-8">Logout</button>
            </div>
         </div>
        : <div className="alert alert-danger" role="alert">Please, do Login!</div> } 
    </div>
    );
};
export default Private;