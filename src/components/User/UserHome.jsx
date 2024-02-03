import React from "react"
import { observer } from "mobx-react"
import HomeUp from '../Login/HomeUp'
import Services from './service'

const UserHome = (observer(() => {

  return (
    <>
        <HomeUp/>
        <h2>שרותים</h2>
        <Services/>
    </>
  )
}))

export default UserHome