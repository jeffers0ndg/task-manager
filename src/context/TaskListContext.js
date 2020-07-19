import React, {createContext, useState} from 'react';

export const TaskListContext =  createContext();

const TaskListContextProvider = () => {
    useState([
        {task:'Ler o livro', id: 1},
        {task:'Lavar o carro', id: 2},
        {task:'Escrever algum codigo', id: 3},
    ])
    return <div>Task list context</div>   
}

export default TaskListContextProvider;