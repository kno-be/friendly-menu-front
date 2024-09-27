import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Função para trocar o idioma
  };

  return (
    <div className="App">
      <h1>{t('menu.title')}</h1>

      {/* Adicionando botões para trocar de idioma */}
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>

      <h2>{t('menu.cart')}</h2>
      <button>{t('menu.checkout')}</button>
    </div>
  );
}

export default App;