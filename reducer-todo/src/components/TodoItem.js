import React from 'react';

const TodoItem = (props) => {
    return (
        <div className='item-container'>
            {props.state.map((object, index) => {
                return <p key={index}>{object.task}</p>
            })}
        </div>
    )
}

export default TodoItem;