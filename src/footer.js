import React from 'react';

/**
 * Componente de pie de página para la aplicación
 * Incluye información de contacto y enlaces relevantes
 */
const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@testpersonalidad.com</p>
          <p>Teléfono: +57 123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <a href="/about">Acerca de</a>
          <a href="/privacy">Política de Privacidad</a>
          <a href="/terms">Términos de Servicio</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Test de Personalidad - realizado por Lina Cáeres. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default footer;