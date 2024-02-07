import {Button, TextField, colors, makeStyles } from "@mui/material"
import React, { useState } from 'react';
import { observer } from "mobx-react";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import SaveChanges from "./SaveChanges‏ ";
import BusinnessServices from '../../store/BusinnessServices';
import dataStore from "../../Data/dataStore";

const NewForm =(observer(()=>{

  
  const [date, setDate] = useState(dayjs('2024-02-03T00:00'));
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [chosenService, setService] = React.useState('');
  const names = BusinnessServices.servicesList;
  const handleClick = () =>{
    SaveChanges(chosenService, date, customerName, phone)
  }

  let a= ""
  if (dataStore.isMakeMeeting == false) {  a = "red"}
  else{   a="" }

return (<>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    <InputLabel>שם השרות</InputLabel>
    <Select
       value={chosenService} label="שם השרות"
       onChange={(event) => setService(event.target.value)}>
       {names.map((name) => (<MenuItem key={name} value={name.name}> {name.name} </MenuItem> ))}
    </Select>
</FormControl>

<LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateTimePicker']}>
      <DateTimePicker
        id ="makeDate" label="בחר תאריך" value={date} 
        className={a}
        onChange={(newValue) => setDate(newValue)}/>
    </DemoContainer>
</LocalizationProvider> <br/>

<TextField
      id="outlined-basic"
      label="שם"
      type="text"
      value={customerName}
      variant="filled"
      onChange={(e) => setCustomerName(e.target.value)}/> <br/> <br/>

<TextField
      id="outlined-basic"
      label="פלאפון"
      type="text"
      value={phone}
      variant="filled"
      onChange={(e) => setPhone(e.target.value)}/> <br/> <br/>

<Button
    variant="contained" color="warning"
    onClick={()=> handleClick()}> אישור
</Button>
</>)
}))
export default NewForm