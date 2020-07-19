 import React from 'react';

 const Task = () => {
     return (
         <div>
             <li className='list-item'>
                <span>Titulo da tareafa</span>
                <div>
                    <button className='bnt-delete task-btn'>
                        <i className='fas fa-trash-alt'></i>
                    </button>
                    <button className='bnt-edit task-btn'>
                        <i className='fas fa-pen'></i>
                    </button>
                </div>
             </li>
         </div>
     )
 }

 export default Task;