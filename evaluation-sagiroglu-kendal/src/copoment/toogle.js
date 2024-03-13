import React, { useState } from 'react';
import './toogle.css';



function WordList() {
  const [words, setWords] = useState([
    { text: 'Bonjour', color: 'black' },
    { text: 'Salut', color: 'black' },
    { text: 'Hello', color: 'black' },
    { text: 'Hola', color: 'black' },
  ]);

  const handleClick = (index) => {
    const updatedWords = [...words];
    updatedWords[index].color = getRandomColor();
    setWords(updatedWords);
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      <h1>Liste de Mots</h1>
      <ul className="word-list">
        {words.map((word, index) => (
          <li key={index} className="word-item">
            <div
              className="word-square"
              style={{ borderColor: word.color, color: 'black' }}
              onClick={() => handleClick(index)}
            >
              {word.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;

