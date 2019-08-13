import React, { useState } from 'react';

function TodoForm (props) {

    const {dispatch} = props;

    const [task, setTask] = useState();

    const handleChange = event => {
        console.log(task);
        setTask(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_TODO', payload: task});
        setTask('');
    };

    const clearComplete = event => {
        event.preventDefault();
        dispatch({type: 'CLEAR_TODO'});
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input
                placeholder='Task'
                value={task}
                name='task'
                onChange={handleChange}
                />
                <button>Submit</button>               
                <button className='clear-button' onClick={(event) => clearComplete(event)}>Clear Completed</button>
              
            </form>

        </div>
    )
}
export default TodoForm;