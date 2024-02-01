import AdminEdit from "../../store/AdminEdit"
import React, { useState } from 'react';
import { observer } from "mobx-react"
import dataStore from "../../Data/dataStore";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonEdit from "./ButtonEdit";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


const BusinessDetails = (observer(() => {
    const [isActive, setIsActive] = useState(false);

  return (
      <>

      {!dataStore.isLogin ? "" : <ButtonEdit />}

      <Box sx={{ display: 'flex'}}>
      <Typography sx={{ marginLeft: '10px' }}>{AdminEdit.email} </Typography>
      <Typography sx={{ marginLeft: '10px' }}></Typography>|
      <Typography sx={{ marginLeft: '10px' }}>{AdminEdit.phone}</Typography>
      <Typography sx={{ marginLeft: '10px' }}></Typography>|
      <Typography sx={{ marginLeft: '10px' }}>{AdminEdit.address}</Typography>
      <Typography sx={{ marginLeft: '10px' }}></Typography>|
      <Typography sx={{ marginLeft: '10px' }}>{AdminEdit.name}</Typography>

      </Box>
        

        {isActive ? <p>Activated!</p> : null}

      
        <div style={{ marginBottom: '15px' }}></div>
      </>
  )
}));
export default BusinessDetails;