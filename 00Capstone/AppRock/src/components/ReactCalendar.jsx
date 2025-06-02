import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './Sample.css';

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());
  console.log(value);
  //console.log(setValue); 
  //const selectDate = value; 
  const longDate = value.toString(); 
  let selectDate = longDate.slice(0, -41); 
  console.log(selectDate); 

  // going further, use 'selectDate' to pull LocalSchedule from database (will have to organize: ddd/mmm/yyyy)

  //document.getElementById("testMessage").textContent = "The date you selected is: " + selectDate; 

  return (
    <div className="Sample">
      <header>
        <h1>Schedule for: {selectDate}</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={setValue} showWeekNumbers value={value} />
        </main>
      </div>
      <br></br>
      <div>
        <h2>test</h2>
        <p>The date you selected is: {selectDate}</p>
      </div>
      <br></br>
      <div>
        
        <div id="LocalSchedule">
          <h3>Schedule for {selectDate}</h3>
          <p>___________________________</p>
        </div>
        
      </div>

    </div>
  );
}



// changes for GIT commit 