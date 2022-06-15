import React, { useRef, useState } from 'react';
import ShowDate from './ShowDate';
const FetchDate = () => {
  //Accessing input elements by useRef
  const inputEle1 = useRef();
  const inputEle2 = useRef();
  //to store date values in useState
  const [datas, setDatas] = useState([]);
  //to throw error message if the date is already matched
  const [dateError, setDateError] = useState('');

  const handleDate = () => {
    const startDate = inputEle1.current.value;
    const endDate = inputEle2.current.value;

    if (startDate >= endDate && startDate <= endDate) {
      setDateError('Date is not overlapping');
    } else {
      setDateError('Date is overlapping');
    }

    let res = { startDate, endDate };
    const dateArr = [...datas];
    dateArr.push(res);
    setDatas(dateArr);
  };
  return (
    <div>
      <input type="date" ref={inputEle1} placeholder="Start Date" />
      <input type="date" ref={inputEle2} placeholder="End Date" />
      <button type="submit" onClick={handleDate}>
        Submit
      </button>
      {dateError}
      <br />
      <br />
      <ShowDate datas={datas} />
    </div>
  );
};
export default FetchDate;
