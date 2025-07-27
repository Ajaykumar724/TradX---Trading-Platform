import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/dashboard/homePage.js';
import OrdersPage from './landing_page/orders/ordersPage.js';
import HoldingsPage from './landing_page/holdings/holdingsPage.js';
import PositionsPage from './landing_page/positions/positionsPage.js';
import FundsPage from './landing_page/funds/fundsPage.js';
import AppsPage from './landing_page/apps/appsPage.js';
import ProfilePage from './landing_page/profile/profilePage.js';
 
import FixedComponent from './landing_page/fixedComponent.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FixedComponent/>
    <Routes><Route path='/dashboard' element={<HomePage />}></Route></Routes>
    <Routes><Route path='/orders' element={<OrdersPage/>}></Route></Routes>
    <Routes><Route path='/holdings' element={<HoldingsPage />}></Route></Routes>
    <Routes><Route path='/positions' element={<PositionsPage />}></Route></Routes>
    <Routes><Route path='/funds' element={<FundsPage />}></Route></Routes>
    <Routes><Route path='/apps' element={<AppsPage />}></Route></Routes>
    <Routes><Route path='/profile' element={<ProfilePage />}></Route></Routes>
  </BrowserRouter>
);


