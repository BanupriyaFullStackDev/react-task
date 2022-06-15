import React, { useState } from 'react';
import './style.css';
import Todos from './Todo.js';
import FetchDate from './FetchDate.js';
// import ReactHook from './UseRef.js';

export default function App() {
  // console.log('from parent');

  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState(['todo1', 'todo2']);
  return (
    <div>
      <FetchDate />
      {/* <ReactHook /> */}
      {/* <Todos todos={todos} />
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setTodos(['todo2', 'todo3'])}>Todos</button> */}
    </div>
  );
}
