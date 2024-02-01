import {Button, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import SaveChanges from "./SaveChanges‏ ";
const NewForm =(observer(()=>{
    const [name, setName] = useState("שרות חדש");
    const [description, setDescription] = useState("...");
    const [cost, setCost] = useState("$");

return (
<>
<TextField
id="outlined-basic"
label="שם השרות"
type="text"
value={name}
variant="filled"
color="secondary"
onChange={(e) => setName(e.target.value)}
/>
<TextField
    id="outlined-basic"
    label="תאור"
    type="text"
    value={description}
    variant="filled"
    color="secondary"
    onChange={(e) => setDescription(e.target.value)}
/>
<br/>
<br/>
<TextField
      id="outlined-basic"
      label="עלות"
      type="text"
      value={cost}
      variant="filled"
      color="secondary"
      onChange={(e) => setCost(e.target.value)}
/>

<br/>
<br/>
<Button
    variant="contained"
    color="secondary"
    onClick={()=> SaveChanges(name, description, cost)}>
    אישור
</Button>
</>
)}
)
)
export default NewForm