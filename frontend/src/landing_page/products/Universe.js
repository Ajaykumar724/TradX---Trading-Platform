import React from 'react';

function Universe() {
    return (
        <div className='container mt-5 pt-5'>
            <div classname='univ-head'>
                <h3 className='text-center'>The TradX Universe</h3>
                <p className='text-center mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className='clients row offset-1 ms-4'>
                <div className='col-4 text-center mt-5'>
                    <img src='/images/media/zerodhaFundhouse.png' alt='fund-image' className='fund-image'></img>
                    <div className='zerodha-des opacity-75 mt-3 mb-3'>
                        Our asset management venture <br></br>
                        that is creating simple and transparent index <br></br>
                        funds to help you save for your goals.
                    </div>
                </div>
                <div className='col-4 text-center mt-5'>
                    <img src='/images/media/sensibullLogo.svg' alt='fund-image' className='fund-image'></img>
                    <div className='zerodha-des opacity-75 mt-3 mb-3'>
                        Options trading platform that lets you <br></br>
                        create strategies, analyze positions, and examine <br></br>
                        data points like open interest, FII/DII, and more.
                    </div>
                </div>
                <div className='col-4 text-center mt-5'>
                    <img src='/images/media/tijori.svg' alt='fund-image' className='fund-image'></img>
                    <div className='zerodha-des opacity-75 mt-3 mb-3'>
                        Investment research platform <br></br>
                        that offers detailed insights on stocks, <br></br>
                        sectors, supply chains, and more.
                    </div>
                </div>
                <div className='col-4 text-center mt-5'>
                    <img src='/images/media/streakLogo.png' alt='fund-image' className='fund-image'></img>
                    <div className='zerodha-des opacity-75 mt-3 mb-3'>
                        Systematic trading platform <br></br>
                        that allows you to create and backtest <br></br>
                        strategies without coding.
                    </div>
                </div>
                <div className='col-4 text-center mt-5'>
                    <img src='/images/media/smallcaseLogo.png' alt='fund-image' className='fund-image'></img>
                    <div className='zerodha-des opacity-75 mt-3 mb-3'>
                        Thematic investing platform <br></br>
                        that helps you invest in diversified <br></br>
                        baskets of stocks on ETFs.
                    </div>
                </div>
                <div className='col-4 text-center mt-5'>
                    <img src='/images/media/dittoLogo.png' alt='fund-image' className='fund-image'></img>
                    <div className='zerodha-des opacity-75 mt-3 mb-3'>
                        Personalized advice on life <br></br>
                        and health insurance. No spam <br></br>
                        and no mis-selling.
                    </div>
                </div>
            </div>
            <div className='univ-btn row text-center mt-5 mb-5'><button class="btn btn-primary fs-5 p-auto mt-4" style={{ width: "25%", margin: "0 auto" }} type="button">Sign up for free</button></div>
        </div>
    );
}

export default Universe;