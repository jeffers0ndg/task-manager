import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext'

const TraskForm = () => {

    const { addTask } = useContext(TaskListContext);

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange}
                value={title}
                type='text'
                className='task-input'
                placeholder='Adicionar tarefa...'
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