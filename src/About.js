import React from 'react';
import mbtiImage from './images/fondo-test.png'; // Asegúrate de tener esta imagen en tu carpeta images
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Acerca del Test de Personalidad</h1>
        <p className="subtitle">Descubre más sobre tu tipo de personalidad</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>¿Qué es el MBTI?</h2>
          <p>
            El Indicador de Tipo Myers-Briggs (MBTI) es un instrumento de evaluación psicológica diseñado para identificar
            el tipo de personalidad, las fortalezas y las preferencias de una persona. Fue desarrollado por Katharine Cook
            Briggs y su hija Isabel Briggs Myers, basándose en las teorías de Carl Jung.
          </p>

          <h2>Las 4 Dimensiones</h2>
          <p>
            El MBTI clasifica las personalidades en 16 tipos diferentes basados en 4 dimensiones fundamentales:
          </p>
          <ul>
            <li><strong>Energía:</strong> Extroversión (E) vs. Introversión (I)</li>
            <li><strong>Percepción:</strong> Sensación (S) vs. Intuición (N)</li>
            <li><strong>Decisión:</strong> Pensamiento (T) vs. Sentimiento (F)</li>
            <li><strong>Estilo de vida:</strong> Juicio (J) vs. Percepción (P)</li>
          </ul>

          <h2>Sobre este Proyecto</h2>
          <p>
            Este test de personalidad fue desarrollado como parte del programa de formación del SENA en Análisis y Desarrollo
            de Software. Utiliza React JS para ofrecer una experiencia interactiva y moderna.
          </p>
          <p>
            Los resultados del test te ayudarán a comprender mejor tus preferencias naturales, fortalezas y áreas de desarrollo.
          </p>
        </div>

        <div className="about-image">
          <img src={mbtiImage} alt="Tipos de personalidad MBTI" />
          <div className="image-caption">Los 16 tipos de personalidad del MBTI</div>
        </div>
      </div>

      <div className="about-footer">
        <h3>¿Cómo interpretar los resultados?</h3>
        <p>
          Cada tipo de personalidad tiene características únicas. No hay tipos "mejores" o "peores", solo diferentes formas
          de percibir el mundo y tomar decisiones. Usa tus resultados como herramienta de autoconocimiento y desarrollo personal.
        </p>
        <a href="/test" className="start-test-btn">Realizar Test</a>
      </div>
    </div>
  );
};

export default About;