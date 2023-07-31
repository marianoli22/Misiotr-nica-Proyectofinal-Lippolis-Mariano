import React from "react";
import "./Contact.css";

const Contact = () => {
    return(
        <div className="contact-container">
            <h1>Formulario de contacto</h1>
            <h2>Deja tu consulta y nos encargaremos de contestar lo más rápido posible</h2>
            <form method="POST">
                <label>Nombre</label>
                <input type="text" name="nombre" />
                <label>Email</label>
                <input type="text" name="email" />
                <label>Mensaje</label>
                <textarea name="mensaje"></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
};

export default Contact;