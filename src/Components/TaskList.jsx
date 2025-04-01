import React from "react";

export default function TaskList({ tasks, toggleTask, editTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          <div>
            <span className={`task-title ${task.completed ? 'completed' : ''}`}>{task.title}</span>
            <p className="task-description">{task.description}</p>
          </div>
          <div className="task-actions">
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <button onClick={() => editTask(task)} className="edit-button">Edit</button>
            <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}