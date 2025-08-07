import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='text-center pt-4' style={{ marginTop: "40px" }}>
                <h1>Open a free demat and trading account online</h1>
                <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className='row mt-5 pt-5 offset-1'>
                <div className='col-6'>
                    <img src='images/media/account_open.svg' alt='open_account'></img>
                </div>
                <div className='col-6 pt-4'>
                    <h2>Signup Now</h2>
                    <p className='text-muted mt-3'>Or track your existing application</p>
                    <div class="input-group mb-3 mt-3">
                        <span class="input-group-text" id="basic-addon1"><img src='images/media/indiaFlag.png' width={"25px"} height={"15px"}></img>  +91</span>
                        <input type="text" class="form-control" placeholder="Enter your mobile number" aria-label="With textarea" />
                    </div>
                    <button class="btn btn-primary mt-2 fs-5" style={{ width: "50%", height: "17%", margin: "0 auto" }} type="button">Get OTP</button>
                    <p className='text-muted mt-4' style={{ fontSize: "12px" }}>By proceeding, you agree to the TradX terms & privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;