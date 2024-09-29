import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Importando a página Home
import Navbar from './components/Navbar';

function App() {
  const { t, i18n } = useTranslation();
  const [cartItems, setCartItems] = useState(() => {
    // Tenta carregar os itens do localStorage
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // const cartItemsView = JSON.parse(localStorage.getItem('cartItems'));
  // console.log(cartItemsView);


  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Função para trocar o idioma
  };

  // Função para adicionar itens ao carrinho
  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((cartItem) => cartItem.id === item.id);
      const newCartItems = itemExists
        ? prevCartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCartItems, { ...item, quantity: 1 }];

      // Salva o carrinho atualizado no localStorage
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  useEffect(() => {
    // Atualiza o localStorage sempre que cartItems mudar
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />{/* Ajuste do Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;