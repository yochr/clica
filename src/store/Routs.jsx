import * as React from "react";
import {createBrowserRouter} from 'react-router-dom'
import AdminPage from "../components/Login/AdminPage";
import UserHome from "../components/User/UserHome";

const Routs = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminPage/>
    },
    {
        path: '/',
        element: <UserHome/>
    }
])

export default Routs

