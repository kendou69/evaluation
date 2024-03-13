import React, { useState } from 'react';

function TodoItem({ task, checked, onCheck, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleEditSubmit = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${checked ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={handleEditChange}
          />
          <button className="submit" onClick={handleEditSubmit}>Valider</button>
          <button className="cancel" onClick={handleCancelEdit}>Annuler</button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <button className="edit" onClick={() => setIsEditing(true)}>Modifier</button>
          <button className="delete" onClick={onDelete}>Supprimer</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
