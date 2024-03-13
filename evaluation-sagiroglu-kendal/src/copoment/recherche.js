import React from 'react';
import './recherche.css';

function Recherche({ onSearch }) {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="recherche">
      <input
        type="text"
        placeholder="Rechercher un mot..."
        onChange={handleChange}
        className="recherche-input"
      />
    </div>
  );
}

export default Recherche;

