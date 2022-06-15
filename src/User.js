import React, { useState } from 'react';

const User = () => {
  const [color, setColor] = useState('green');
  const myStyle = {
    height: '20px',
    width: '20px',
    borderRadius: '20px',
  };

  return (
    <>
      {color}
      <button style={{ ...myStyle, backgroundColor: color }}></button>
      <button
        onClick={() => {
          if (color == 'green') {
            setColor('red');
          } else {
            setColor('yellow');
          }
        }}
      >
        Click
      </button>
    </>
  );
};
export default User;
