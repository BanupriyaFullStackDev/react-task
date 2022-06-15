import React, { useRef, useState, useEffect } from 'react';

const ReactHook = () => {
  const [inputVal, setInputVal] = useState('');
  const count = useRef(0);

  useEffect(() => {
    console.log('page rendered');
    count.current = count.current + 1;
  });
  // const inputEle = useRef();
  // const focusInput = () => {
  //   console.log(inputEle.current.value);
  // };
  return (
    <>
      {count.current}
      {/* <input type="text" ref={inputEle} /> */}
      <input
        type="number"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      {/* <button onClick={focusInput}>Focus Input</button> */}
    </>
  );
};
export default ReactHook;
