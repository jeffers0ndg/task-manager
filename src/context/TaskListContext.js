import React, {createContext, useState} from 'react';

export const TaskListContext =  createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks]= useState([
        {task:'Ler o livro', id: 1},
        {task:'Lavar o carro', id: 2},
        {task:'Escrever algum codigo', id: 3},
    ]); 
    return (
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )   
};

export default TaskListContextProvider;