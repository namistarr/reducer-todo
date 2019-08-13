import React, { useReducer } from 'react';
import './App.css';

//components 
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

//reducers
import todoReducer, { initialState } from './reducers/todoReducer';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoItem state={state} />
    </div>
  );
}

export default App;
