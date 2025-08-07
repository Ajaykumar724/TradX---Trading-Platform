import React from 'react';

function Hero() {
    return (
        <div className="pb-5 pt-4" style={{ background: "#fcfcfc", position:"relative", top:"-10px" }}>
            <div className='container'>
                <div className='tic-intro row mt-5'>
                    <h2 className='col-3'>Support Portal</h2>
                    <div className='col-7'></div>
                    <button className="btn btn-primary col-2" type="button">My Tickets</button>
                </div>

                <div class="mb-3 mt-5">
                    <input class="form-control form-control-lg" type="text" placeholder="Eg: how do i activate F&O..." aria-label=".form-control-lg"></input>
                </div>
            </div>
        </div>
    );
}

export default Hero;