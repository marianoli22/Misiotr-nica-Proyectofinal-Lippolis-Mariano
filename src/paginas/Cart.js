import React from "react";
import "./Cart.css";

const Cart = ({ items }) => {
    const total = items.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <div>
        <img src="/png-clipart-shopping-cart-shopping-cart.png" alt="Carrito de compras" className="cart-logo" />
       <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
