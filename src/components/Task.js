import React from 'react';

const Task = ({ task }) => {
    return (
        <li className='list-item'>
            <span>{task.task}</span>
            <div>
                <button className='bnt-delete task-btn'>
                    <i className='fas fa-trash-alt'></i>
                </button>
                <button className='bnt-edit task-btn'>
                    <i className='fas fa-pen'></i>
                </button>
            </div>
        </li>
    )
}

export default Task;