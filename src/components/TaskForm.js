import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext'

const TraskForm = () => {

    const { addTask, cleanList, editItem, editTask } = useContext(TaskListContext);

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title)
        } else {
            setTitle('');
        }
    }, [editItem])

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
                <button onClick={cleanList}
                    className='btn clear-btn'>
                    Limpar
                </button>
            </div>
        </form>
    )
}

export default TraskForm; 