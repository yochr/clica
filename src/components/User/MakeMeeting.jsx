import React,{useState} from 'react';
import FormMakeMeeting from './formMakeMeeting';
import Button from '@mui/material/Button';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { Fab } from '@mui/material';

const ButtonMakeMeeting =()=> {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick=()=>{
        setIsClicked(true)
    }
   
  return (<>
    <Fab color="warning" aria-label="edit" sx={{position: 'fixed', left:'25px', bottom: '25px'}} onClick={handleClick}>
        <EditCalendarIcon/>
      </Fab>
    {isClicked && <FormMakeMeeting setIsClicked={setIsClicked}/>}
    </>)
    
};

export default ButtonMakeMeeting;