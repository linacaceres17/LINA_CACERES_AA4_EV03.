import React from 'react';
import banner from "./images/gif1.gif";
import banner2 from "./images/gif2.gif";

const Home = () => {
  return (
    <div className="home">
        <div className='info-home'>
      <h1>Bienvenido al Test de Personalidad</h1>
      <p>Descubre tu tipo de personalidad con nuestro test basado en el modelo MBTI.</p>
      <a href="/test" className="start-test-btn">Comenzar Test</a>
      </div>
      <div className='imagenes-home'>
      <img src={banner} alt="Banner" />
      <img src={banner2} alt="Banner2" />
      </div>
    </div>
  );
};

export default Home;