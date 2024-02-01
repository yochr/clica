import  React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react"
import CheckLogin from '../../Data/checkLogin';

function LoginAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        CheckLogin(username,password)
      };

  return (
    <>
    <div>
        <h2>LoginAdmin</h2>
    </div>
    <div >

        <TextField
        id="input-with-icon-adornment"
        label="שם משתמש"
        value={username}
        variant="outlined"
        color="secondary"
        onChange={(e) => setUsername(e.target.value)}
        />

        <br></br>
        <br></br>
        
        <TextField
        id="outlined-basic"
        label="סיסמא"
        value={password}
        type="password"
        variant="outlined"
        color="secondary"
        onChange={(e) => setPassword(e.target.value)}
        />

        <br></br>
        <br></br>

        <Button
        variant="contained"
        color="secondary"
        onClick={handleLogin}>
        כניסה
        </Button>

    </div>
    </>
  )
}

export default LoginAdmin