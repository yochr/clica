import {Button } from "@mui/material"
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

const NewForm =(observer(()=>{

  const [date, setDate] = useState(dayjs('2024-02-03T00:00'));
  const [chosenService, setService] = React.useState('');
  const names = BusinnessServices.servicesList;

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
        label="בחר תאריך" value={date}
        onChange={(newValue) => setDate(newValue)}/>
    </DemoContainer>
</LocalizationProvider> <br/> <br/>

<Button
    variant="contained" color="secondary"
    onClick={()=> SaveChanges(chosenService, date)}> אישור
</Button>
</>)
}))
export default NewForm