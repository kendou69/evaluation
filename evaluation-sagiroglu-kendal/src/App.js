import logo from './logo.svg';
import './App.css';
import Wordlist from './copoment/toogle';
import Recherche from './copoment/recherche';
import TodoList from './copoment/TodoList';
import React, { useState } from 'react';


function App() {
  const [words, setWords] = useState([
    { text: 'Bonjour', color: 'black' },
    { text: 'Salut', color: 'black' },
    { text: 'Hello', color: 'black' },
    { text: 'Hola', color: 'black' },
  ]);

  const [filteredWords, setFilteredWords] = useState(words);

  const handleSearch = (searchTerm) => {
    const filtered = words.filter((word) =>
      word.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWords(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Wordlist />
        <Recherche onSearch={handleSearch} />
        <ul>
          {filteredWords.map((word, index) => (
            <li key={index} style={{ color: word.color }}>
              {word.text}
            </li>
          ))}
        </ul>
        <TodoList />
      
      </header>
    </div>
  );
}

export default App;
