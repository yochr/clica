import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Services from '../Services/service3+';
import MeetingTable from '../Meetings/MeetingTable';
import SwitchService from '../Services/switchLength';
import ButtonAddService from '../Services/AddService';

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}> 
      {value === index && (<Box sx={{ p: 3 }}> {children} </Box>)}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw', height: '50vh'}}>
        <Tabs value={value} onChange={handleChange} sx={{ borderBottom: 1, borderColor: 'orange'}}
         textColor="orange" indicatorColor="warning" variant="fullWidth">
          <Tab label="פגישות" sx={{width: '100%'}}/>
          <Tab label="שרותים" sx={{width: '100%'}}/>
        </Tabs>
      <CustomTabPanel value={value} index={0}>
        <MeetingTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SwitchService/>
        <ButtonAddService/>
      </CustomTabPanel>
    </Box>

  );
}