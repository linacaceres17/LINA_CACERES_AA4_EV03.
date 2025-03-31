import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestForm.css';

const TestForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  // Preguntas basadas en las 4 dimensiones MBTI
  const questions = [
    // Extroversión (E) vs. Introversión (I)
    {
      id: 1,
      text: "Generalmente prefiero pasar tiempo con un grupo de amigos que solo o con una persona.",
      dimension: "EI",
      direction: "E"
    },
    {
      id: 2,
      text: "Me siento lleno de energía después de socializar en eventos con mucha gente.",
      dimension: "EI",
      direction: "E"
    },
    {
      id: 3,
      text: "Disfruto más de actividades tranquilas y solitarias que de fiestas ruidosas.",
      dimension: "EI",
      direction: "I"
    },
    {
      id: 4,
      text: "Prefiero comunicarme por escrito (mensajes, emails) que en conversaciones cara a cara.",
      dimension: "EI",
      direction: "I"
    },
    {
      id: 5,
      text: "Me resulta fácil iniciar conversaciones con personas desconocidas.",
      dimension: "EI",
      direction: "E"
    },

    // Sensación (S) vs. Intuición (N)
    {
      id: 6,
      text: "Prefiero concentrarme en hechos concretos más que en teorías abstractas.",
      dimension: "SN",
      direction: "S"
    },
    {
      id: 7,
      text: "A menudo pienso en posibilidades futuras más que en realidades presentes.",
      dimension: "SN",
      direction: "N"
    },
    {
      id: 8,
      text: "Me gusta trabajar con ideas y conceptos teóricos.",
      dimension: "SN",
      direction: "N"
    },
    {
      id: 9,
      text: "Aprendo mejor haciendo que leyendo instrucciones detalladas.",
      dimension: "SN",
      direction: "S"
    },
    {
      id: 10,
      text: "Disfruto interpretando significados ocultos en películas o libros.",
      dimension: "SN",
      direction: "N"
    },

    // Pensamiento (T) vs. Sentimiento (F)
    {
      id: 11,
      text: "Tomo decisiones basadas en lógica más que en sentimientos personales.",
      dimension: "TF",
      direction: "T"
    },
    {
      id: 12,
      text: "Considero más importante ser compasivo que objetivo en mis juicios.",
      dimension: "TF",
      direction: "F"
    },
    {
      id: 13,
      text: "Prefiero decir verdades duras que mentiras piadosas.",
      dimension: "TF",
      direction: "T"
    },
    {
      id: 14,
      text: "Me afectan profundamente los conflictos interpersonales.",
      dimension: "TF",
      direction: "F"
    },
    {
      id: 15,
      text: "Valoro más la justicia que la misericordia en la mayoría de situaciones.",
      dimension: "TF",
      direction: "T"
    },

    // Juicio (J) vs. Percepción (P)
    {
      id: 16,
      text: "Prefiero tener horarios estructurados más que ser espontáneo.",
      dimension: "JP",
      direction: "J"
    },
    {
      id: 17,
      text: "Me adapto fácilmente a cambios de planes inesperados.",
      dimension: "JP",
      direction: "P"
    },
    {
      id: 18,
      text: "Hago listas y planifico mis actividades con anticipación.",
      dimension: "JP",
      direction: "J"
    },
    {
      id: 19,
      text: "Disfruto dejando las opciones abiertas en lugar de decidir rápidamente.",
      dimension: "JP",
      direction: "P"
    },
    {
      id: 20,
      text: "Me siento incómodo cuando las cosas no están organizadas.",
      dimension: "JP",
      direction: "J"
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers) => {
    const dimensions = {
      EI: { E: 0, I: 0 },
      SN: { S: 0, N: 0 },
      TF: { T: 0, F: 0 },
      JP: { J: 0, P: 0 }
    };

    questions.forEach((question, index) => {
      if (userAnswers[index] !== undefined) {
        const answerValue = userAnswers[index] ? 1 : -1;
        dimensions[question.dimension][question.direction] += answerValue;
      }
    });

    const result = [
      dimensions.EI.E >= dimensions.EI.I ? 'E' : 'I',
      dimensions.SN.S >= dimensions.SN.N ? 'S' : 'N',
      dimensions.TF.T >= dimensions.TF.F ? 'T' : 'F',
      dimensions.JP.J >= dimensions.JP.P ? 'J' : 'P'
    ].join('');

    navigate('/result', { state: { personalityType: result } });
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="test-container">
      <h2>Test de Personalidad</h2>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      
      <div className="question-card">
        <p className="question-text">{questions[currentQuestion].text}</p>
        
        <div className="answer-options">
          <button 
            onClick={() => handleAnswer(true)} 
            className="answer-btn agree-btn"
          >
            De acuerdo
          </button>
          
          <button 
            onClick={() => handleAnswer(false)} 
            className="answer-btn disagree-btn"
          >
            En desacuerdo
          </button>
        </div>
        
        <p className="question-counter">
          Pregunta {currentQuestion + 1} de {questions.length}
        </p>
      </div>
    </div>
  );
};

export default TestForm;