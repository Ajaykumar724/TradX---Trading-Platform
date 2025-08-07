import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage.js';
import Signup from "./landing_page/signup/Signup.js";
import About from "./landing_page/about/AboutPage.js";
import Products from "./landing_page/products/ProductsPage.js";
import Pricing from "./landing_page/pricing/PricingPage.js";
import Support from "./landing_page/support/SupportPage.js";
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/notFound/NotFound.js';

import Login  from './landing_page/pages/Login.js';
import SignupPage from './landing_page/pages/Signup.js';
import Home  from "./landing_page/pages/Home.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path='/' element={<HomePage />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signpage" element={<SignupPage />} />
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/pricing' element={<Pricing />}></Route>
      <Route path='/support' element={<Support />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);