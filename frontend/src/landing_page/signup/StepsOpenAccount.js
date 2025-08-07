import React from 'react';

function StepsOpenAccount() {
    return (
        <div style={{ background: "#fcfcfc", width: "100%" }}>
            <div className='container pt-5 offset-2 mt-5' style={{ background: "#fcfcfc", width: "100%" }}>
                <div>
                    <div className='row ms-3'>
                        <h2>Steps to open a demat account with TradX</h2>
                    </div>
                    <div className='row col-8 mt-5'>
                        <div className='col-2'><img src='images/media/steps-acop.svg' style={{ width: "350px", height: "350px", marginTop: "-100px" }} alt='acop-image'></img></div>
                        <div className='col-4'></div>
                        <div className='col-6 mt-4 opacity-75'>
                            <h5><span className="material-symbols-outlined" style={{position:"relative" ,top:"5px"}}>counter_1</span> <span>Enter the requested details</span></h5>
                            <hr></hr>
                            <h5><span class="material-symbols-outlined" style={{position:"relative" ,top:"5px"}}>counter_2</span> <span>Complete e-sign & verification</span></h5>
                            <hr></hr>
                            <h5><span class="material-symbols-outlined" style={{position:"relative" ,top:"5px"}}>counter_3</span> <span>Start investing!</span></h5>
                            <hr></hr>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default StepsOpenAccount;