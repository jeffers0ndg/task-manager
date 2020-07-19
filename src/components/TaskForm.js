import React from 'react';

const TraskForm = () => {
    return (
        <form className='form'>
            <input type='text'
                className='task-input'
                placeholder='Add task...'
                required
            />
            <div className='buttons'>
                <button type='submit'
                    className="bnt add-task-bnt">
                    Adicionar
                </button>
                <button
                    className='bnt clear-bnt'>
                    Limpar 
                </button>
            </div>
        </form>
    )
}

export default TraskForm; 