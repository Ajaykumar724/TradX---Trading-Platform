import React from 'react';
import Eduction from './Eduction';
import Pricing from './Pricing';
import Stats from './Stats';
import Hero from './Hero';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { CookiesProvider } from "react-cookie";

function HomePage() {
    return ( 
        <>
        <CookiesProvider>
         <Hero/>
        </CookiesProvider>
         <Stats/>
         <Pricing/>
         <Eduction/>
         {/* <Awards/> */}
         <OpenAccount/>
        </>
     );
}

export default HomePage;