import React from "react"
import { observer } from "mobx-react"
import IsEditDetails from "../BussnesData/IsEditDetails"
import BusinnessTab from "./BusinnessTab"

const AdminHome = (observer(() => {

  return (
    <>
      <h2>AdminHome</h2>
      <BusinnessTab/>
    </>
  )
}))

export default AdminHome