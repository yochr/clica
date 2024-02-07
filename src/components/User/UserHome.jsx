import React from "react"
import { observer } from "mobx-react"
import HomeUp from '../Login/HomeUp'
import SwitchService from "../Services/switchLength"
import ButtonMakeMeeting from "./MakeMeeting"
import { useState, useEffect } from 'react';
import BusinnessServices from "../../store/BusinnessServices"
import { getServices } from "../../store/server"


const UserHome = (observer(() => {
  const [servicesLength, setServicesLength] = useState(null)
  console.log(BusinnessServices.servicesList.length)

  useEffect(() => {
    getServices()
    console.log(BusinnessServices.servicesList.length)

  }, []);
  

  return (
    <>
        <HomeUp/>
        <h2>שרותים</h2>
        <SwitchService/>
        <br/>
        <ButtonMakeMeeting/>
    </>
  )
  

}))

export default UserHome