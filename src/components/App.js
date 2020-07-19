import React from 'react';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import Task from './Task';
import '../App.css';

const App = () => {
    return (
        <TaskListContextProvider>
            <div>
                <TaskList />
            </div>
        </TaskListContextProvider>
    );
}

export default App;