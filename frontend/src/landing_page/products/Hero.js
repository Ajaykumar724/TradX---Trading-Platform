import React from 'react';
import '../../products.css';

function Hero() {
    return ( 
        <div className='container mt-5 pt-3'>
            <div className='products text-center'><h1>TradX Products</h1></div>
            <div className='products fs-5 text-center opacity-75'><p>Sleek, modern, and intuitive trading platforms</p></div>
            <div className='products-des-btn text-center'>Check out our <a href='#' className='prod-des-link'>investment offerings <i class="fa-solid fa-arrow-right arrow"></i></a></div>

            <hr className='mt-5 mb-5 pb-5'></hr>
        </div>
     );
}

export default Hero;