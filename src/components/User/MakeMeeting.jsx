import React,{useState} from 'react';
import FormMakeMeeting from './formMakeMeeting';
import Button from '@mui/material/Button';

const ButtonMakeMeeting =()=> {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick=()=>{
        setIsClicked(true)
    }
   
  return (<>
    <Button sx={{height: '8vh', color: 'orange', backgroundColor: '#424242'}} onClick={handleClick}>
        <h3>לקביעת פגישה</h3>
    </Button>
    {isClicked && <FormMakeMeeting setIsClicked={setIsClicked}/>}
    </>)
    
};

export default ButtonMakeMeeting;