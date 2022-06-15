import React, { memo } from 'react';
const Todos = ({ todos }) => {
  console.log('from todos');
  return (
    <>
      <div>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
    </>
  );
};
export default memo(Todos);
