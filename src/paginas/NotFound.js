import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
      <div className="not-found-container">
        <h1 className="error-text">Error 404</h1>
        <p className="error-message">La página que buscas no se ha encontrado.</p>
      </div>
    );
  };
export default NotFound;
