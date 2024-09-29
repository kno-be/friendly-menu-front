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
  const url = process.env.REACT_APP_URL_API;


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

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const orderData = {
      text: cartItems,
      // Adicione outros dados necessários para o pedido, como endereço, etc.
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o pedido.");
      }

      alert("Pedido enviado com sucesso!");
      clearCart(); // Limpa o carrinho após o pedido ser enviado
    } catch (error) {
      console.error("Erro:", error);
      alert("Não foi possível enviar o pedido.");
    }
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
        <div className="cart-actions">
          <button onClick={clearCart}>Limpar Carrinho</button>
          <button onClick={placeOrder}>Enviar Pedido</button>
        </div>
      </div>
    </Router>
  );
}

export default App;