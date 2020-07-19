import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    const [tasks, setTasks] = useState([
        { title: 'Ler o livro', id: 1 },
        { title: 'Lavar o carro', id: 2 },
        { title: 'Escrever algum codigo', id: 3 },
    ]);
    
    const [editItem, setEditItem] = useState(null);

    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    } 

    const cleanList = () => {
        setTasks([]);
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (
            task.id === id ? {title, id }  : task ));
        setTasks(newTasks);
    }

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                cleanList,
                findItem,
                editItem,
                editTask
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;