import React from "react";
import "./Cards.css";

const Cards = ({ imageSrc, altText, cardText, price, onAddToCart }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} className="card-img-top" />
      <div className="card-body">
        <p className="card-text"><b>{altText}</b><br/><br/>{cardText}</p>
        <p className="price">Precio: ${price}</p> 
        <button onClick={onAddToCart}>Comprar</button>
      </div>
    </div>
  );
};

export default Cards;
