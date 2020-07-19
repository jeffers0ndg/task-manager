import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    const [tasks, setTasks] = useState([
        { title: 'Ler o livro', id: 1 },
        { title: 'Lavar o carro', id: 2 },
        { title: 'Escrever algum codigo', id: 3 },
    ]);

    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
    }
    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;