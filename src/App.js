import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import TestForm from './TestForm';
import ResultDisplay from './ResultDisplay';
import Footer from './footer';
import Home from './Home';
import About from './About';
import './App.css';

/**
 * Componente principal de la aplicación
 * Configura las rutas y estructura general
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestForm />} />
            <Route path="/result" element={<ResultDisplay />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;