import React from 'react';

function Benefits() {
    return ( 
        <div className='container'>
            <div className='pt-5 offset-2 pt-5 mt-5 row'>
            <div className='right-benefit col-6'>
                <div className='img-benefit'>
                    <img src='images/media/acop-benefits.svg' style={{height:"340px", width:"340px"}} alt='benefits image'></img>
                </div>
                <div className='img-des'>
                    <h3>Benefits of opening a TradX demat account</h3>
                </div>
            </div>
            <div className='left-benefit col-5 '>
                <div className='benefit-1 mb-5'>
                    <h5>Unbeatable pricing</h5>
                    <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                </div>
                <div className='benefit-2 mb-5'>
                    <h5>Best investing experience</h5>
                    <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                </div>
                <div className='benefit-3 mb-5'>
                    <h5>No spam or gimmicks</h5>
                    <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                </div>
                <div className='benefit-4 mb-5'>
                    <h5>The Zerodha universe</h5>
                    <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
            </div>
          </div>
        </div>
     );
}

export default Benefits;