// Home.js
import React from 'react';
import './Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <img src={process.env.PUBLIC_URL + '/svu_logo2.png'} alt="Logo" />
    </div>
  );
};

export default Home;