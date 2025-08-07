import React from 'react';

function Stats() {
    return ( 
        <div className='container '>
           <div className='row mt-4 p-5'>
           <div className='col'>
               <h2>Trust with Confidence</h2>
               <div class="card-body">
                 <h5 class="card-title mt-5">Customer-first always</h5>
                 <p class="card-text mt-3">
                 That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
               </div>
               <div class="card-body">
                 <h5 class="card-title mt-5">No spam or gimmicks</h5>
                 <p class="card-text mt-3">
No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
               </div>
               <div class="card-body">
                 <h5 class="card-title mt-5">The TradX universe</h5>
                 <p class="card-text mt-3">
Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
               </div>
               <div class="card-body">
                 <h5 class="card-title mt-5">Do better with money</h5>
                 <p class="card-text mt-3">
                 With initiatives like <a href='#' className='link-underline link-underline-opacity-0'>Nudge</a> and <a href='#' className='link-underline link-underline-opacity-0'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
               </div>
           </div>
           <div className='col'>
               <img src='images/media/ecosystem.png' alt='statsImage'style={{height:"500px",width:"500px", cursor:"pointer"}}/>
               <div className='row p-5 mt-3'>
                  <div className='col-6'><a href='#' className='link-underline link-underline-opacity-0'>Explore our products  <i class="fa-solid fa-arrow-right"></i></a></div>
                  <div className='col-6'><a href='#' className='link-underline link-underline-opacity-0'>Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a></div>
               </div>
           </div>
           </div>
           <div className='row'>
             <img src='images/media/pressLogos.png' alt='pressLogo' style={{width:"60%" , margin:"0 auto" }}></img>
           </div>
        </div>
     );
}

export default Stats;