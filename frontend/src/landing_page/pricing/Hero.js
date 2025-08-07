import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='header text-center mt-5'>
               <h2>Charges</h2>
               <p className='text-muted'>List of all charges and taxes</p>
            </div>

            <div className='prices row offset-1 mb-5 mt-5 pt-5 text-center'>
                <div className='zero-equ col-3'>
                   <img src='/images/media/pricingEquity.svg' alt='pricing'></img>
                   <h4>Free equity delivery</h4>
                   <p className='text-muted mt-5 text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-1'></div>
                <div className='20-trades col-3'>
                   <img src='/images/media/intradayTrades.svg' alt='pricing'></img>
                   <h4>Intraday and F&O trades</h4>
                   <p className='text-muted mt-5 text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-1'></div>
                <div className='MF col-3'>
                   <img src='/images/media/pricingMF.svg' alt='pricing'></img>
                   <h4>Free direct MF</h4>
                   <p className='text-muted mt-5 text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
           
        </div>
     );
}

export default Hero;