import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductsPage() {
    return ( 
        <>
         <Hero/>
         <LeftSection leftImage="/images/media/kite.png" productName="Kite" productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlayLink="#" appStoreLink="#"/>
         <RightSection productName="Console" productDes="The central dashboard for your TradX account. Gain insights into your trades and investments with in-depth reports and visualisations." below="Learn more" link="#" productImage="/images/media/console.png"/>
         <LeftSection leftImage="/images/media/coin.png" productName="Coin" productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlayLink="#" appStoreLink="#"/>
         <RightSection productName="Kite Connect API" productDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." below="Learn more" link="#" productImage="/images/media/landing.svg"/>
         <LeftSection leftImage="/images/media/varsity.png" productName="Varsity mobile" productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="#" learnMore="#" googlePlayLink="#" appStoreLink="#"/>
         <p className='text-center'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}>TradX.tech</a> blog.</p>
         <Universe/>
        </>
        
     );
}

export default ProductsPage;