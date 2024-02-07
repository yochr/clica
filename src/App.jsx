 
import React, { useState } from 'react';
import './App.css'
import { getBusinessData, getMeetings, getServices, setServices } from './store/server.js';
import UserHome from './components/User/UserHome.jsx';
import AdminPage from './components/Login/AdminPage.jsx';
import { Outlet, Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MyRouter from './Routs.jsx';

//  setServices("meeting room","rent rooms for businness meeting","100$");
//   setServices("science room","rent rooms Experiments","150$");
//   setServices("Events Hall","rent rooms big events","180$");
//   setServices("Events room","rent rooms small events","80$");

function App() {

const [currentPage, setCurrentPage] = useState('/');
const handlePageChange = (page) => {
  setCurrentPage(page);
};

 getBusinessData();
 getServices();
 getMeetings();
  
  return (
    <MyRouter/>
  );
}

export default App;