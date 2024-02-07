import React from "react"
import { observer } from "mobx-react"
import HomeUp from '../Login/HomeUp'
import SwitchService from "../Services/switchLength"
import ButtonMakeMeeting from "./MakeMeeting"
import { useState, useEffect } from 'react';
import BusinnessServices from "../../store/BusinnessServices"
import { getServices } from "../../store/server"
import { Box, Button } from "@mui/material"
import AdminEdit from "../../store/AdminEdit"

const UserHome = (observer(() => {
  const[name, setName]= useState('');
  function update() {
    setName(AdminEdit.name);
    console.log(name)
  }

// function fun() {
//   let now1= clock();
//   return now1;
// }

setInterval(update, 100000)



  return (
    <>
        <HomeUp/>
        <Box sx={{backgroundImage: "url('/src/img/3.jpg')", backgroundColor: '#FEF9B4', width: '100%', height: '100vh', top: '100px', position: 'fixed', right: '0'}}>

          <br/> <br/> <br/> <br/>
          <h2>שרותים</h2>
          <br/>
          <SwitchService />          
          <br/> <br/>
          <ButtonMakeMeeting/>
        </Box>        
    </>
  )
  

}))

export default UserHome