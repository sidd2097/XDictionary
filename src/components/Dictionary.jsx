import React, { useState } from 'react';
import './Dictionary.css';



const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === lowercaseSearchTerm);
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="x-dictionary">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="definition">
      Definition:
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default XDictionary;
