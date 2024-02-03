import React from "react"
import LoginAdmin from "./LoginAdmin.jsx"
import { observer } from "mobx-react"
import AdminHome from '../Admin/AdminHome.jsx'
import dataStore from "../../Data/dataStore.jsx"
import HomeUp from './HomeUp.jsx'


const AdminPage = (observer(() => {

    return (
        <>
            <HomeUp/>
            {!dataStore.isLogin ? <LoginAdmin /> : <AdminHome />}
        </>
    )
}))

export default AdminPage