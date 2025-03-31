import React from 'react';
import { jsPDF } from 'jspdf';

/**
 * Componente para generar y descargar los resultados en PDF
 * Utiliza la biblioteca jsPDF para crear el documento
 */
const DownloadButton = ({ personalityType, userName }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Configuración del documento PDF
    doc.setFontSize(18);
    doc.text('Resultado de Test de Personalidad', 105, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text(`Nombre: ${userName || 'Usuario'}`, 20, 40);
    doc.text(`Tipo de Personalidad: ${personalityType}`, 20, 50);
    
    // Agregar más información al PDF...
    
    // Guardar el documento
    doc.save(`Resultado_Test_Personalidad_${userName || ''}.pdf`);
  };

  return (
    <button onClick={generatePDF} className="download-btn">
      Descargar Resultado en PDF
    </button>
  );
};

export default DownloadButton;