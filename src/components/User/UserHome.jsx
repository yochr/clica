import React from "react"
import { observer } from "mobx-react"
import HomeUp from '../Login/HomeUp'
import SwitchService from "../Services/switchLength"
import ButtonMakeMeeting from "./MakeMeeting"
import { useState, useEffect } from 'react';
import BusinnessServices from "../../store/BusinnessServices"
import { getServices } from "../../store/server"
import { Box } from "@mui/material"

const UserHome = (observer(() => {
  const [servicesLength, setServicesLength] = useState(0)
  useEffect(() => {
    getServices()
    console.log(servicesLength)
    // render( <UserHome {...servicesLength!=BusinnessServices.servicesList.length}/>);

  }, []);

  
  

  return (
    <>
      {servicesLength != BusinnessServices.servicesList.length ? 
      setServicesLength(BusinnessServices.servicesList.length): console.log(servicesLength) }

        <HomeUp/>
        <Box sx={{backgroundColor: '#FEF9B4', width: '100%', height: '100vh', top: '100px', position: 'fixed', right: '0'}}>

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