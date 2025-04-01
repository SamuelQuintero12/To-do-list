import React from "react";


export default function TaskForm({ newTask, setNewTask, editingTask, saveTask, cancelEdit, addTask }) {
  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Task Title"
        className="input"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="textarea"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      ></textarea>
      {editingTask ? (
        <>
          <button onClick={saveTask} className="button">Save Task</button>
          <button onClick={cancelEdit} className="button cancel-button">Cancel</button>
        </>
      ) : (
        <button onClick={addTask} className="button">Add Task</button>
      )}
    </div>
  );
} 