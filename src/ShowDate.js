import React from 'react';

const ShowDate = ({ datas }) => {
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.startDate}</td>
                <td>{data.endDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ShowDate;
