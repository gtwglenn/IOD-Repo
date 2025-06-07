import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SideCalendar = ({ selectDate, setSelectDate }) => {
  return (
    <div>
      <Calendar value={selectDate} onChange={setSelectDate} />
    </div>
  );
};

export default SideCalendar;