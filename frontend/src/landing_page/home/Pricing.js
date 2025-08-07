import React from 'react';

function Pricing() {
    return ( 
        
        <div className='container mt-5 pt-5'>
            <div className='row p-5'>
                <div className='col-5'>
                   <h2>Unbeatable pricing</h2>
                   <p>We pioneered the concept of discount broking and price<br></br> transparency in India. Flat fees and no hidden charges.</p>
                   <a href='#' className='link-underline link-underline-opacity-0'>Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7'>
                    <div className='row'>
                        <div className='col-3'> <img src='images/media/pricingMF.svg' style={{width:"100%", height:"100%",}}></img>
                        <p style={{fontSize:"10px",position:"relative",left:"6.5rem", bottom:"4rem"}}>Free account<br/> Open</p>
                        </div>
                        <div className='col-1'></div>
                        <div className='col-3'> <img src='images/media/pricingEquity.svg' style={{width:"100%", height:"100%",}}></img>
                        <p style={{fontSize:"10px",position:"relative",left:"6.5rem", bottom:"4rem"}}>Free equity delivery <br></br>and direct mutual funds</p></div>
                        <div className='col-1'></div>
                        <div className='col-3'> <img src='images/media/other-trades.svg' style={{width:"100%", height:"100%"}}></img>
                        <p style={{fontSize:"10px",position:"relative",left:"8rem", bottom:"4rem"}}>Intraday and<br></br> F&O</p></div>
                        <div className='col-1'></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;