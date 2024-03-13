import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;
