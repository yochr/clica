import React from "react"
import { observer } from "mobx-react"
import HomeUp from '../Login/HomeUp'
import SwitchService from "../Services/switchLength"
import ButtonMakeMeeting from "./MakeMeeting"

const UserHome = (observer(() => {

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