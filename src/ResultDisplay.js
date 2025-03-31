import React from 'react';
import { useLocation } from 'react-router-dom';
import DownloadButton from './DownloadButton';
import './ResultDisplay.css';

const ResultDisplay = () => {
  const location = useLocation();
  const { personalityType } = location.state || {};
  
  // Descripciones completas de los 16 tipos de personalidad MBTI
  const personalityData = {
    "INTJ": {
      title: "El Arquitecto",
      description: "Imaginativos y estratégicos, con un plan para todo. Representan solo el 2% de la población.",
      strengths: ["Analíticos", "Creativos", "Determinados", "Independientes"],
      weaknesses: ["Demasiado críticos", "Poco emocionales", "Perfeccionistas"],
      careers: ["Estratega", "Ingeniero de sistemas", "Científico", "Juez"],
      relationships: "Prefieren relaciones profundas basadas en el intelecto más que en la emoción."
    },
    "INTP": {
      title: "El Lógico",
      description: "Inventores innovadores con una sed insaciable de conocimiento.",
      strengths: ["Originales", "Objetivos", "Lógicos", "Curiosos"],
      weaknesses: ["Distraídos", "Insensibles", "Críticos"],
      careers: ["Desarrollador de software", "Matemático", "Físico", "Filósofo"],
      relationships: "Valoran la independencia y las discusiones intelectuales en sus relaciones."
    },
    "ENTJ": {
      title: "El Comandante",
      description: "Líderes audaces e imaginativos, con una fuerte voluntad.",
      strengths: ["Eficientes", "Energéticos", "Seguros", "Estratégicos"],
      weaknesses: ["Dominantes", "Impacientes", "Intolerantes"],
      careers: ["CEO", "Abogado", "Consultor", "Empresario"],
      relationships: "Buscan parejas que puedan seguir su ritmo y compartir sus ambiciones."
    },
    "ENTP": {
      title: "El Innovador",
      description: "Pensadores inteligentes y curiosos que no pueden resistirse a un desafío intelectual.",
      strengths: ["Creativos", "Ingeniosos", "Elocuentes", "Rápidos"],
      weaknesses: ["Controversiales", "Inconsistentes", "Insensibles"],
      careers: ["Emprendedor", "Abogado", "Inventor", "Consultor"],
      relationships: "Disfrutan del debate y necesitan parejas que aprecien su ingenio."
    },
    "INFJ": {
      title: "El Consejero",
      description: "Idealistas tranquilos y místicos, pero muy persuasivos.",
      strengths: ["Creativos", "Empáticos", "Persuasivos", "Determinados"],
      weaknesses: ["Perfeccionistas", "Sensibles", "Complejos"],
      careers: ["Psicólogo", "Escritor", "Consejero", "Médico"],
      relationships: "Buscan conexiones profundas y significativas con sus parejas."
    },
    "INFP": {
      title: "El Mediador",
      description: "Personas poéticas, bondadosas y altruistas, siempre en busca del bien.",
      strengths: ["Empáticos", "Creativos", "Idealistas", "Leales"],
      weaknesses: ["Demasiado idealistas", "Auto-críticos", "Poco prácticos"],
      careers: ["Escritor", "Psicólogo", "Artista", "Trabajador social"],
      relationships: "Valoran la autenticidad y la armonía en sus relaciones."
    },
    "ENFJ": {
      title: "El Protagonista",
      description: "Líderes carismáticos e inspiradores, capaces de cautivar a su audiencia.",
      strengths: ["Carismáticos", "Empáticos", "Persuasivos", "Organizados"],
      weaknesses: ["Demasiado altruistas", "Sensibles a las críticas", "Controladores"],
      careers: ["Maestro", "Psicólogo", "Relaciones públicas", "Político"],
      relationships: "Se esfuerzan por crear relaciones armoniosas y de apoyo mutuo."
    },
    "ENFP": {
      title: "El Activista",
      description: "Personas entusiastas, creativas y sociables que pueden encontrar razones para sonreír en cualquier situación.",
      strengths: ["Entusiastas", "Creativos", "Sociables", "Perceptivos"],
      weaknesses: ["Desorganizados", "Estrés fácil", "Sobrepensadores"],
      careers: ["Actor", "Periodista", "Diseñador", "Consultor"],
      relationships: "Aportan energía y entusiasmo a sus relaciones."
    },
    "ISTJ": {
      title: "El Inspector",
      description: "Individuos prácticos y enfocados en los hechos, cuya confiabilidad no puede ser cuestionada.",
      strengths: ["Organizados", "Responsables", "Prácticos", "Leales"],
      weaknesses: ["Inflexibles", "Demasiado tradicionales", "Juzgan rápidamente"],
      careers: ["Contador", "Juez", "Policía", "Administrador"],
      relationships: "Valoran la estabilidad y la lealtad en sus relaciones."
    },
    "ISFJ": {
      title: "El Protector",
      description: "Protectores muy dedicados y cálidos, siempre listos para defender a sus seres queridos.",
      strengths: ["Confiables", "Atentos", "Prácticos", "Leales"],
      weaknesses: ["Demasiado modestos", "Resistentes al cambio", "Sobre cargados"],
      careers: ["Enfermero", "Maestro", "Trabajador social", "Bibliotecario"],
      relationships: "Se preocupan profundamente por el bienestar de sus parejas."
    },
    "ESTJ": {
      title: "El Supervisor",
      description: "Administradores excelentes, inigualables en la gestión de cosas o personas.",
      strengths: ["Organizados", "Leales", "Directos", "Responsables"],
      weaknesses: ["Inflexibles", "Poco sensibles", "Dominantes"],
      careers: ["Gerente", "Oficial militar", "Juez", "Administrador"],
      relationships: "Valoran la estabilidad y la tradición en sus relaciones."
    },
    "ESFJ": {
      title: "El Cónsul",
      description: "Personas extraordinariamente cariñosas, sociales y populares, siempre listas para ayudar.",
      strengths: ["Leales", "Empáticos", "Organizados", "Prácticos"],
      weaknesses: ["Sensibles a las críticas", "Necesitan aprobación", "Resistentes al cambio"],
      careers: ["Enfermero", "Maestro", "Recursos humanos", "Trabajador social"],
      relationships: "Se esfuerzan por crear armonía y satisfacer las necesidades de sus parejas."
    },
    "ISTP": {
      title: "El Artesano",
      description: "Experimentadores audaces y prácticos, maestros de todo tipo de herramientas.",
      strengths: ["Optimistas", "Creativos", "Prácticos", "Espontáneos"],
      weaknesses: ["Arriesgados", "Insensibles", "Reservados"],
      careers: ["Piloto", "Ingeniero", "Atleta", "Mecánico"],
      relationships: "Valoran su independencia pero son leales a quienes respetan su espacio."
    },
    "ISFP": {
      title: "El Aventurero",
      description: "Artistas flexibles y encantadores, siempre listos para explorar y experimentar.",
      strengths: ["Creativos", "Empáticos", "Artísticos", "Adaptables"],
      weaknesses: ["Demasiado competitivos", "Evitan conflictos", "Impulsivos"],
      careers: ["Artista", "Músico", "Diseñador", "Chef"],
      relationships: "Aportan espontaneidad y calidez a sus relaciones."
    },
    "ESTP": {
      title: "El Emprendedor",
      description: "Personas inteligentes, enérgicas y muy perceptivas que realmente disfrutan vivir al límite.",
      strengths: ["Energéticos", "Persuasivos", "Sociables", "Directos"],
      weaknesses: ["Impulsivos", "Insensibles", "Inconsistentes"],
      careers: ["Ventas", "Marketing", "Deportista", "Actor"],
      relationships: "Aportan emoción y aventura a sus relaciones."
    },
    "ESFP": {
      title: "El Animador",
      description: "Animadores espontáneos, enérgicos y entusiastas: la vida nunca es aburrida a su alrededor.",
      strengths: ["Entusiastas", "Sociables", "Espontáneos", "Optimistas"],
      weaknesses: ["Poco organizados", "Sensibles", "Se distraen fácilmente"],
      careers: ["Actor", "Presentador", "Artista", "Trabajador social"],
      relationships: "Aportan diversión y energía positiva a sus relaciones."
    }
  };

  return (
    <div className="result-container">
      <h2>Tu Resultado</h2>
      {personalityType ? (
        <div className="result-content">
          <div className="personality-card">
            <div className="type-header">
              <h3 className="personality-type">{personalityType}</h3>
              <h4 className="personality-title">{personalityData[personalityType]?.title}</h4>
            </div>
            <p className="personality-description">
              {personalityData[personalityType]?.description}
            </p>
            
            <div className="traits-section">
              <div className="traits-column">
                <h5>Fortalezas</h5>
                <ul>
                  {personalityData[personalityType]?.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div className="traits-column">
                <h5>Áreas de mejora</h5>
                <ul>
                  {personalityData[personalityType]?.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="careers-section">
              <h5>Carreras recomendadas</h5>
              <div className="careers-list">
                {personalityData[personalityType]?.careers.map((career, index) => (
                  <span key={index} className="career-tag">{career}</span>
                ))}
              </div>
            </div>
            
            <div className="relationships-section">
              <h5>En relaciones</h5>
              <p>{personalityData[personalityType]?.relationships}</p>
            </div>
          </div>
          
          <DownloadButton personalityType={personalityType} />
        </div>
      ) : (
        <div className="no-results">
          <p>No se encontraron resultados. Por favor, realiza el test primero.</p>
          <a href="/test" className="retake-btn">Realizar Test</a>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;