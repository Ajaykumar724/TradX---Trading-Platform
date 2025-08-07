import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center mb-3'><h2>Open a TradX account</h2></div>
            <div className='row text-center'><p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p></div>
            <div className='row text-center'><Link class="btn btn-primary fs-5 p-auto mt-4" style={{width:"25%",margin:"0 auto"}} type="button" to={"./signpage"}>Sign up for free</Link></div>
        </div>
     );
}

export default OpenAccount;