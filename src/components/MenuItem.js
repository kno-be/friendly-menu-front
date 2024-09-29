import React from "react";
import "./MenuItem.css";
const MenuItem = ({ item, lang, addToCart }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-text">
        <h3 className="menu-item-heading">
          <div
            className="bolinha"
            style={{
              width: "8px",
              height: "8px",
              marginRight: "5px",
              backgroundColor: "var(--green)", // Pode alterar a cor
              borderRadius: "50%",
            }}
          ></div>
          <span className="menu-item-name">{item.name[lang]}</span>
        </h3>
        <p className="menu-item-description">{item.description[lang]}</p>
        <button onClick={() => addToCart(item)}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
