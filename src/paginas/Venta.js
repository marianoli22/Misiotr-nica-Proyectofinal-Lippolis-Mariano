import React, { useState } from "react";
import "./Venta.css";
import Cards from "../components/Cards";
import { Form } from "react-router-dom";
import Cart from "./Cart";


const Venta = () => {
  
  const salesList = [
    {
      id: 1,
      title: 'Cable de Alimentación',
      description: 'Cable eléctrico que vincula la corriente eléctrica y tu computador. De este depende que tu computador reciba la energía eléctrica necesaria para funcionar. Si el cable de alimentación no está correctamente enchufado, el equipo no encenderá.',
      price: 950,
      imageUrl: '/3X18E-1.8-1-1200x1200.jpg',
    },
    {
      id: 2,
      title: 'Celular Samsung A50',
      description: 'Celular Libre 128GB',
      price: "95000",
      imageUrl: "/28507.jpg"
    },
    {
      id: 3,
      title: 'Celular Samsung A10',
      description: 'Celular libre 32GB',
      price: "70000",
      imageUrl: "/28530.jpg"
    },
    {
      id: 4,
      title: 'Tira de Luces Led',
      description: 'Luces led multicolor de 5mts para que puedas ambientar tu hogar',
      price: "4900",
      imageUrl: "/CD29075-46-1-1200x1200-1.jpg"
    },
    {
      id: 5,
      title: 'Bateria para Notebook HP',
      description: 'Bateria Para Notebook Hp Cq40 Dv4 Hstnn-db72 Nueva + Gtia.',
      price: "12000",
      imageUrl: "/f0e62894ccd795f2d60bedd6cf169bdb-62f665c0bbcf3.jpg"
    },
    {
      id: 6,
      title: 'Placa de Video',
      description: 'Asus Nvidia Geforce Gt 1030 2gb D5 Gddr5',
      price: "50000",
      imageUrl: "/concepto-3249091.jpg"
    },
    {
      id: 7,
      title: 'Celular Motorola G42',
      description: '128GB Metálico',
      price: "95000",
      imageUrl: "/b3d373b22abf63f1115017052464.jpg"
    },
    
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
 
  return (
    <div className="venta-container">
      <div className="productos-title-container">
        <h2 className="productos-title">Productos</h2>
      </div>
      <div className="cards-container">
        {salesList.map((item) => (
          <Cards
            key={item.id}
            imageSrc={item.imageUrl}
            altText={item.title}
            cardText={item.description}
            price={item.price}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
      <div className="cart">
        <Cart items={cartItems} total={calculateTotal()} />
      </div>
    </div>
  );
};
  
export default Venta;