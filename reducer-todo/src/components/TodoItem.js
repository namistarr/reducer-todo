import React from 'react';

const TodoItem = (props) => {

    const {dispatch} = props;

    return (
        <div className='item-container'>
            {props.state.map((object, index) => {
                return (
                <div 
                key={index} 
                className={`task${object.completed ? ' completed' : ''}`} 
                onClick={()=> dispatch({type: 'TOGGLE_TODO', payload: object.id})}>
                <p>{object.task}</p>                
                </div>
                
                )            
            })}
        </div>
    )
}

export default TodoItem;