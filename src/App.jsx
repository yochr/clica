import React from 'react';
import './App.css'
import { getBusinessData, getServices } from './store/server.js';
import Routs from './store/Routs.jsx';
import UserHome from './components/User/UserHome.jsx';

function App() {

  getBusinessData();
  getServices();

  
  return (
    <>
      <UserHome/>
    </>  
  )
}

export default App