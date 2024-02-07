import React from "react"
import { observer } from "mobx-react"
import HomeUp from '../Login/HomeUp'
import SwitchService from "../Services/switchLength"
import ButtonMakeMeeting from "./MakeMeeting"
import { useState, useEffect } from 'react';
import BusinnessServices from "../../store/BusinnessServices"
import { getServices } from "../../store/server"
import { render } from "react-dom"

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
        <h2>שרותים</h2>
        <SwitchService/>
        <br/>
        <ButtonMakeMeeting/>
    </>
  )
  

}))

export default UserHome