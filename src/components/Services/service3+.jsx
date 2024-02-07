import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import BusinnessServices from '../../store/BusinnessServices';
import { observer } from 'mobx-react';
import { useState, useEffect } from 'react';

const Services3 =(observer(()=>{
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = BusinnessServices.servicesList.length-2;
  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1)};
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1)};

  
    return (    
<Box sx={{ width: '100vw', display: 'flex', justifyContent:'space-between' }}>
        <Button sx={{height: '8vh', color: 'orange', backgroundColor: '#424242'}}size="small" onClick={handleBack} disabled={activeStep === 0}>  
          <KeyboardArrowLeft /> </Button>

        <Box>
          {BusinnessServices.servicesList[activeStep].name} <br/>
          {BusinnessServices.servicesList[activeStep].description} <br/>
          {BusinnessServices.servicesList[activeStep].cost} </Box>

        <Box>
          {BusinnessServices.servicesList[activeStep+1].name} <br/>
          {BusinnessServices.servicesList[activeStep+1].description} <br/>
          {BusinnessServices.servicesList[activeStep+1].cost} </Box>

        <Box>
          {BusinnessServices.servicesList[activeStep+2].name} <br/>
          {BusinnessServices.servicesList[activeStep+2].description} <br/>
          {BusinnessServices.servicesList[activeStep+2].cost} </Box>
  
        <Button sx={{height: '8vh', color: 'orange', backgroundColor: '#424242', width:'1vw'}}  onClick={handleNext} disabled={activeStep === maxSteps - 1} >
         <KeyboardArrowRight /> </Button>
      </Box>
    );
  }))
export default  Services3;  
  
