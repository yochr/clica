import React from "react"
import { observer } from "mobx-react"
import { Outlet } from "react-router-dom"
import BasicTabs from "./BusinnessTab"

const AdminHome = (observer(() => {

  return (
    <>
      <h2>AdminHome</h2>
      <BasicTabs/>
    </>
  )
}))

export default AdminHome