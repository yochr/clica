import React from 'react';
import './App.css'
import { getBusinessData, getServices } from './store/server.js';
import AdminPage from './components/Login/AdminPage.jsx'
import UserHome from "./components/User/HomeUp.jsx"
function App() {

  getBusinessData();
  getServices();
  return (
    <>
    <div>
      <UserHome/>
      <AdminPage/>
      </div>
    </>  
  )
}

export default App