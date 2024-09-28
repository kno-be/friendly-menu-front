import React, { useState } from 'react';
import './Navbar.css'; // Certifique-se de que o CSS está importado corretamente

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla a abertura do menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'change' : ''}`}>
      <div className="navbar-logo">
        <a href="#">
          Friendly Auberge
        </a>
      </div>
      <div className={`nav-list ${isOpen ? 'change' : ''}`}>
        <a href="#1" className="nav-link">Entrées</a>
        <a href="#2" className="nav-link">Plats</a>
        <a href="#3" className="nav-link">Desserts</a>
      </div>
      <div className="nav" onClick={toggleMenu}>
        <div className={`line line-1 ${isOpen ? 'change' : ''}`}></div>
        <div className={`line line-2`}></div>
        <div className={`line line-3 ${isOpen ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;