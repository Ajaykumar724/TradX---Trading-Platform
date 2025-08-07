import React from 'react';

function Options() {
    return ( 
        <div className='container mt-5 pt-5'>
            <h2 className='text-center'>Investment options with TradX demat account</h2>
            <div className='offset-2'>
                <div className='row'>
                    <div className='col'>
                        <div className='row mt-5 pt-3'>
                            <div className='col-4'><img src='images/media/stocks-acop.svg'></img></div>
                            <div className='col-6'><h3>Stocks</h3><p>Invest in all exchange-listed securities</p></div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row mt-5 pt-3'>
                            <div className='col-4'><img src='images/media/mf-acop.svg'></img></div>
                            <div className='col-6'><h3>Mutual funds</h3><p>Invest in commission-free direct mutual funds</p></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row mt-5'>
                            <div className='col-4'><img src='images/media/fo-acop.svg'></img></div>
                            <div className='col-6'><h3>IPO</h3><p>Apply to the latest IPOs instantly via UPI</p></div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row mt-5'>
                            <div className='col-4'><img src='images/media/ipo-acop.svg'></img></div>
                            <div className='col-7'><h3>Futures & options</h3><p>Hedge and mitigate market risk through simplified F&O trading</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <button class="btn btn-primary fs-6 p-auto mt-4" style={{width:"23%",margin:"0 auto"}} type="button">Explore Inverstments</button>
            </div>
        </div>
     );
}

export default Options;