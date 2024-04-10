import React, { useState } from "react";
import './PizzaImage.css'

function PizzaImage({ name, description, prize, imageUrl }) {
  const [showName, setShowName] = useState(false);

  return (
    <div
      className="pizza-img"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => setShowName(!showName)}
    >
      {showName && (
        <div className="pizza-image-flip">
          <h3>{name}</h3>

          <h4 className="pizza-prize">${prize}</h4>

          <p className="pizza-description"> {description}</p>
          
          <a href={`https://wa.me/+5493535668990?text=${`Hola! Quisiera pedir una ${name.toLowerCase()}`}`} rel="noreferrer" className="order-whatsapp">Pedir por WhatsApp</a>
        </div>
      )}
    </div>
  );
}

export default PizzaImage;
