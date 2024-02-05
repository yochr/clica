import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Services from '../Services/service';
import BusinessDetails from '../BussnesData/BusinessDetails';
import BusinnessServices from '../../store/BusinnessServices';
import Meetings from '../Meetings/Meeting';
import MeetingTable from '../Meetings/MeetingTable';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80vw', height: '50vh'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="פגישות" {...a11yProps(0)}  sx={{width: '50%'}}/>
          <Tab label="שרותים" {...a11yProps(1)} sx={{width: '50%'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}  >
        <MeetingTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
        <Services/>
        
      </CustomTabPanel>

    </Box>
  );
}