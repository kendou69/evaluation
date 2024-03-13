import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItems';
import './TodoList.css';



function TodoList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      checked: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleCheckTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (id, newTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, task: newTask } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTask} />
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.task}
          checked={task.checked}
          onCheck={() => handleCheckTask(task.id)}
          onEdit={(newTask) => handleEditTask(task.id, newTask)}
          onDelete={() => handleDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
