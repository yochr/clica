import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ButtonAddService from './AddService';
import BusinnessServices from '../../store/BusinnessServices';
import { observer } from 'mobx-react';

const Services3 =(observer(()=>{
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = BusinnessServices.servicesList.length-2;
  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1)};
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1)};
 
    return (    
<Box sx={{ width: '80vw', display: 'flex', justifyContent:'space-between' }}>
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>  
          <KeyboardArrowLeft /> Back </Button>

        <Box sx={{width: '20%'}}>
          {BusinnessServices.servicesList[activeStep].name} <br/>
          {BusinnessServices.servicesList[activeStep].description} <br/>
          {BusinnessServices.servicesList[activeStep].cost} </Box>

        <Box sx={{width: '20%'}}>
          {BusinnessServices.servicesList[activeStep+1].name} <br/>
          {BusinnessServices.servicesList[activeStep+1].description} <br/>
          {BusinnessServices.servicesList[activeStep+1].cost} </Box>

        <Box sx={{width: '20%'}}>
          {BusinnessServices.servicesList[activeStep+2].name} <br/>
          {BusinnessServices.servicesList[activeStep+2].description} <br/>
          {BusinnessServices.servicesList[activeStep+2].cost} </Box>
  
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} >
          Next <KeyboardArrowRight /> </Button>
      </Box>
    );
  }))
export default  Services3;  
  