import React from 'react';
import '../styles/Home.css';
import Menu from '../components/Menu';
// import { useTranslation } from 'react-i18next';

const Home = ({addToCart}) => {
  // const { t } = useTranslation();
  
  return (
    <div className='container'>
      <Menu addToCart={addToCart} />
    </div>
  );
};

export default Home;