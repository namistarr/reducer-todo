import React, { useState } from 'react';

function TodoForm (props) {
    const [task, setTask] = useState();

    const handleChange = event => {
        console.log(task);
        setTask(event.target.value);
    };

    return (
        <div className='form-container'>
            <form>
                <input
                placeholder='Task'
                value={task}
                name='task'
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}
export default TodoForm;