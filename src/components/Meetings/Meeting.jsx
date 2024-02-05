import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Meetings from '../../store/Meetings';
import AddMeeting from './AddMeeting';
import { observer } from 'mobx-react';

const Meeting =(observer(()=>{
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Meetings.meetingsList;
  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1)};
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1)};

    return (
      <Box>
<Box sx={{ width: '80vw', display: 'flex', justifyContent:'space-between' }}>
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>  
          <KeyboardArrowLeft /> Back </Button>

        <Box sx={{width: '20%'}}>
              {Meetings.meetingsList[activeStep].name} </Box>
  
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} >
          Next <KeyboardArrowRight /> </Button>
      </Box>
      <br/> <AddMeeting/>
      </Box>
    );
  }))
export default  Meeting;  
  
