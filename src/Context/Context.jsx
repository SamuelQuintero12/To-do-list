import { createContext, useState } from "react";

export const contextTask = createContext();

export const ProviderTask = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "" });
    const [filter, setFilter] = useState("all");
    const [editingTask, setEditingTask] = useState(null);

    return (
        <contextTask.Provider
            value={{
                tasks,
                setTasks,
                newTask,
                setNewTask,
                filter,
                setFilter,
                editingTask,
                setEditingTask,
            }}
        >
            {children}
        </contextTask.Provider>
    );
};

