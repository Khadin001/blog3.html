import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, updateTask, toggleTaskCompletion }) => {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask(task.id, { ...task, name, description });
    setEditing(false);
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Sauvegarder</button>
          <button onClick={() => setEditing(false)}>Annuler</button>
        </div>
      ) : (
        <div>
          <span onClick={() => toggleTaskCompletion(task.id)}>{task.name}</span>
          <button onClick={() => setEditing(true)}>Modifier</button>
          <button onClick={() => deleteTask(task.id)}>Supprimer</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
