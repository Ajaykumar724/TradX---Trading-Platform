import React from 'react';

function Eduction() {
    return ( 
        <div className='container p-5'>
             <div className='row mt-5'>
                <div className='col-5'><img src='/images/media/education.svg' alt='eduction image' style={{height:"85%", width:"85%", alignItems:"center"}}></img></div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <h2>Free and open market education</h2>
                    <div className='mt-4'>
                      <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                      <div className='col-6'><a href='#' className='link-underline link-underline-opacity-0'>Varsity  <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                    
                    <div className='mt-4'>
                      <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                      <div className='col-6'><a href='#' className='link-underline link-underline-opacity-0'>TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>

                </div>
             </div>
        </div>
     );
}

export default Eduction;