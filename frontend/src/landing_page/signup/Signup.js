import React from 'react';
import Hero from './Hero.js';
import Options from './Options.js';
import StepsOpenAccount from './StepsOpenAccount.js';
import Benefits from './Benefits.js';
import Explore from './Explore.js';
import FAQ from './FAQ.js';
import OpenAccount from '../OpenAccount';


function Signup() {
    return ( 
       <>
         <Hero/>
         <Options/>
         <StepsOpenAccount/>
         <Benefits/>
         <Explore/>
         <FAQ/>
         <OpenAccount/>
       </>
     );
}

export default Signup;