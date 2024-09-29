import React from "react";
import { useTranslation } from "react-i18next";
import { menuItems } from "./menuItens"; // Importe os itens do menu
import MenuItem from "./MenuItem"; // Importe o componente MenuItem
import "./Menu.css";

const Menu = ({addToCart}) => {
  // const {t, i18n } = useTranslation();
  // const lang = 'fr'; // Obtenha o idioma atual
  const groupedItems = menuItems.reduce((groups, item) => {
    const category = item.category["fr"];
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div>
      <div className="menu-group">
        {Object.keys(groupedItems).map((category, index) => (
          <div key={index}>
            <h2 id={index} className="menu-group-heading" style={{ color: "#E6233C" }}>
              {category}
            </h2>
            {groupedItems[category].map((item) => (
              <MenuItem key={item.id} item={item} lang="fr" addToCart={addToCart}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
