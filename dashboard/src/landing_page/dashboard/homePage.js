import React from 'react';
// import {Link} from 'react-router-dom';


function HomePage() {
  return (
    <div className='bg-white' style={{ position: "relative", height: "90vh", width: "60%", left: "40%", bottom: "90vh" }}>
      <div className='user border-bottom m-4 fs-4 p-4' id='user-name'>Hi, Ajay!</div>
      <div className='m-4 p-4'>
        <div className='mb-4'><i className="fa-regular fa-clock fa-sm me-1"></i>Equity</div>
        <div className='row pb-4'>
          <div className='col-4 ms-4'><div className='fs-2'>3.75K</div><div>more available</div></div>
          <div className='col-4 ps-5 mt-3 border-start' style={{fontSize:"13px"}}><div>Margin used : 0</div><div>Opening balance : 3.75K</div></div>
        </div>
        <hr></hr>
      </div>
      

      <div className='ms-4 ps-4'>
        <div className='mb-4 ms-2'><i className="fa-solid fa-credit-card fa-sm me-1"></i>Holdings (13)</div>
        <div className='row'>
          <div className='col-4 ms-4'><div className='fs-2 text-success'>1.55K</div><div style={{fontSize:"10px"}}>P&L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+5.20%</div></div>
          <div className='col-4 ps-5 mt-3 border-start text-primary' style={{fontSize:"13px"}}><div>Current Value : 31.43k</div><div>Investment : 2.88k</div></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;

