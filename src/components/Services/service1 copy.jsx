import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ButtonAddService from './AddService';
import BusinnessServices from '../../store/BusinnessServices';
import { observer } from 'mobx-react';

const Services0 =(observer(()=>{ 
    return (  
      <>
      <h3>אין שרותים זמינים</h3> 
      <ButtonAddService/>
      </>
      
    );
  }))
export default  Services0;  
  
