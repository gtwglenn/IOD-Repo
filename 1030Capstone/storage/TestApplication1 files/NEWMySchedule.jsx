import React from 'react';

const MySchedule = ({ selectDate }) => {
  return (
    <div>
      <h2>Pull schedule for: {selectDate ? selectDate.format('YYYY-MM-DD') : 'No date selected'}</h2>
    </div>
  );
};

export default MySchedule;
