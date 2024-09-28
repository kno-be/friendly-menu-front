import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Importando a página Home
import Navbar from './components/Navbar';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Função para trocar o idioma
  };

  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ajuste do Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;