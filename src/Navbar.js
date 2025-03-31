import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de barra de navegación para la aplicación de test de personalidad
 * Proporciona enlaces a las diferentes secciones de la aplicación
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Test de Personalidad
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/test" className="nav-links">
              Realizar Test
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;