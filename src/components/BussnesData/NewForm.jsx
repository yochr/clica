import {Button, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import AdminEdit from "../../store/AdminEdit.js";
import SaveChanges from "./SaveChanges‏.jsx";

const NewForm =(observer(()=>{
    const [Bname, setBname] = useState(AdminEdit.name??"קליקה מודיעין עילית");
    const [Baddress, setBaddress] = useState(AdminEdit.address??"אבני נזר 36");
    const [Bphone, setBphone] = useState(AdminEdit.phone??"08-6668342");
    const [Bemail, setBemail] = useState(AdminEdit.email??'klika@modil.org.il');

return (
<>
<TextField
id="outlined-basic"
label="שם העסק"
type="text"
value={Bname}
variant="filled"
color="secondary"
onChange={(e) => setBname(e.target.value)}
/>
<TextField
    id="outlined-basic"
    label="כתובת"
    type="text"
    value={Baddress}
    variant="filled"
    color="secondary"
    onChange={(e) => setBaddress(e.target.value)}
/>
<br/>
<br/>
<TextField
      id="outlined-basic"
      label="טלפון"
      type="text"
      value={Bphone}
      variant="filled"
      color="secondary"
      onChange={(e) => setBphone(e.target.value)}
/>
<TextField
      id="outlined-basic"
      label="מייל"
      type="email"
      value={Bemail}
      variant="filled"
      color="secondary"
      onChange={(e) => setBemail(e.target.value)}
/>
<br/>
<br/>
<Button
    variant="contained"
    color="secondary"
    onClick={()=> SaveChanges(Bname, Baddress, Bphone, Bemail)}>
    אישור
</Button>
</>
)}
)
)
export default NewForm