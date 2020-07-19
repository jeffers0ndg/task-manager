import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext'

const TraskForm = () => {

    const {addTask} = useContext(TaskListContext);

    return (
        <form className='form'>
            <input type='text'
                className='task-input'
                placeholder='Add task...'
                required
            />
            <div className='buttons'>
                <button type='submit'
                    className="btn add-task-btn">
                    Adicionar
                </button>
                <button
                    className='btn clear-btn'>
                    Limpar 
                </button>
            </div>
        </form>
    )
}

export default TraskForm; 