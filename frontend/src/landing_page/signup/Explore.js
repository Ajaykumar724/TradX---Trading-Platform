import React from 'react';
import "../../signup.css";

function Explore() {
    return ( 
        <div className='container mt-5 offset-1'>
            <div className='row'>
                <div className='expl-head text-center'><h2>Explore different account types</h2></div>
                <div className='expl-optn opacity-75 row pt-4'>
                    <div className='border rounded col- 3 m-4 optn' style={{height:"150px", width:"300px"}}>
                        <div className='row pt-4'>
                          <div className='col-1 fs-4 text-primary solid' style={{position:"relative", right:"25px", bottom:"5px"}}><i class="fa-solid fa-circle-user"></i></div>
                          <h5 className='col'>Individual Account</h5>
                        </div>
                        <div className='p-4'>Invest in equity, mutual funds and derivatives</div>
                    </div>
                     <div className='border rounded col-3 m-4 optn' style={{height:"150px", width:"300px"}}>
                        <div className='row pt-4'>
                          <div className='col-1 fs-4 text-primary solid' style={{position:"relative", right:"25px", bottom:"5px"}}><i class="fa-solid fa-users-line"></i></div>
                          <h5 className='col'>HUF Account</h5>
                        </div>
                        <div className='p-4'>Make tax-efficient investments for your family</div>
                    </div>
                     <div className='border rounded col-3 m-4 optn' style={{height:"150px", width:"300px"}}>
                        <div className='row pt-4'>
                          <div className='col-1 fs-4 text-primary solid' style={{position:"relative", right:"25px", bottom:"5px"}}><i class="fa-solid fa-globe"></i></div>
                          <h5 className='col'>NRI Account</h5>
                        </div>
                        <div className='p-4'>Invest in equity, mutual funds, debentures, and more</div>
                    </div>
                     <div className='border rounded col-3 m-4 optn' style={{height:"150px", width:"300px"}}>
                        <div className='row pt-4'>
                          <div className='col-1 fs-4 text-primary solid' style={{position:"relative", right:"20px", bottom:"5px"}}><i class="fa-solid fa-child"></i></div>
                          <h5 className='col'>Minor Account</h5>
                        </div>
                        <div className='ps-4 pt-3'>Teach your little ones about money & invest for their future with them</div>
                    </div>
                     <div className='border rounded col-3 m-4 optn' style={{height:"150px", width:"300px"}}>
                        <div className='row pt-4'>
                          <div className='col-1 fs-4 text-primary solid' style={{position:"relative", right:"25px", bottom:"5px"}}><i class="fa-solid fa-industry"></i></div>
                          <h5 className='col'>Corporate / LLP/ Partnership</h5>
                        </div>
                        <div className='ps-4'>Manage your business surplus and investments easily</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Explore;