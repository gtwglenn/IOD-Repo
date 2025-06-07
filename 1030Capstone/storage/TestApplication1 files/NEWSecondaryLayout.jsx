import React, { useState } from 'react';
import SideCalendar from '../components/SideCalendar';
import { Box } from '@mui/material';

const SecondaryLayout = ({ children }) => {
  const [selectDate, setSelectDate] = useState(null);

  // Clone the child and inject selectDate as a prop
  const childWithProps = React.cloneElement(children, { selectDate });

  return (
    <Box display="flex">
      <SideCalendar selectDate={selectDate} setSelectDate={setSelectDate} />
      <Box flexGrow={1} p={2}>
        {childWithProps}
      </Box>
    </Box>
  );
};

export default SecondaryLayout;
