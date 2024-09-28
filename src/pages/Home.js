import React from 'react';
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='teste'>
      <h1>{t('menu.title')}</h1>
      <h2>{t('menu.cart')}</h2>
      <button>{t('menu.checkout')}</button>
    </div>
  );
};

export default Home;