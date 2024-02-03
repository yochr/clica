import {Button, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import SaveChanges from "./SaveChanges‏ ";
import MultipleSelect from "./ServicesList";
const NewForm =(observer(()=>{
    const [date, setDate] = useState("0000-00-00");


return (
<>
<MultipleSelect/>
<TextField
    id="outlined-basic"
    label="תאריך"
    type="date"
    value={date}
    variant="filled"
    color="secondary"
    onChange={(e) => setDate(e.target.value)}
/>


<br/>
<br/>
<Button
    variant="contained"
    color="secondary"
    onClick={()=> SaveChanges(date)}>
    אישור
</Button>
</>
)}
)
)
export default NewForm