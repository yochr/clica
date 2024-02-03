import React,{useState} from 'react';
import FormMakeMeeting from './formMakeMeeting';

const ButtonMakeMeeting =()=> {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick=()=>{
        setIsClicked(true)
    }
   
  return (<>
    <button onClick={handleClick}>
        <h3>לקביעת פגישה</h3>
    </button>
    {isClicked && <FormMakeMeeting setIsClicked={setIsClicked}/>}
    </>)
    
};

export default ButtonMakeMeeting;