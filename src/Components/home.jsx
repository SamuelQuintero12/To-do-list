import React, { useState } from "react";
import "./home.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import FilterButtons from "./FilterButtons";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.title.trim() === "") return;
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
    setNewTask({ title: "", description: "" });
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const editTask = (task) => {
    setEditingTask(task);
    setNewTask({ title: task.title, description: task.description });
  };

  const saveTask = () => {
    if (editingTask) {
      setTasks(tasks.map(task => 
        task.id === editingTask.id ? { ...task, ...newTask } : task
      ));
      setEditingTask(null);
      setNewTask({ title: "", description: "" });
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setNewTask({ title: "", description: "" });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true : filter === "pending" ? !task.completed : task.completed
  );

  return (
    <div className="container">
      <h2 className="title">To-Do List</h2>
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        editingTask={editingTask}
        saveTask={saveTask}
        cancelEdit={cancelEdit}
        addTask={addTask}
      />
      <FilterButtons setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}