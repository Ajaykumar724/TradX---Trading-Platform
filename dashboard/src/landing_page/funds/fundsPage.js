import React from 'react';


function FundsPage() {
  return (
    <div className='bg-white' style={{ position: "relative", height: "90vh", width: "60%", left: "40%", bottom: "90vh" }}>
             <div className='mt-2 row'> 
              <div className='col-5'></div>
               <p className='col-3 fs-6 text-muted mt-1'>Instant, zero-cost fund transfers with UPI</p>
               <button className='bg-primary m-1 text-white col-1' style={{borderRadius:"10px", border:"none", height:"50px", width:"100px"}}>Add funds</button>
               <button className='bg-success m-1 text-white col-1' style={{borderRadius:"10px", border:"none", height:"50px", width:"100px"}}>Withdraw</button>
             </div>

             <div className='row'>
              <div className='mb-1 ms-5'><i className="fa-regular fa-clock fa-sm me-1"></i>Equity</div>
               <div className='col-6 border ms-5 mt-3' style={{height:"79vh", width:"70vh"}}>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Average margin</div><div className='col-6 text-end fs-5'>4,053.53</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Used margin</div><div className='col-6 text-end fs-5'>3,757.55</div></div>
                   <div className='row pt-3 pb-3 ps-4 pe-4 border-bottom'><div className='col-6 text-start fs-6 text-muted'>Available cash</div><div className='col-6 text-end fs-5'>4,053.53</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Opening Balance</div><div className='col-6 text-end '>3,736.53</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Payin</div><div className='col-6 text-end '>4,064.53</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>SPAN</div><div className='col-6 text-end '>0.00</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Delivery margin</div><div className='col-6 text-end '>0.00</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Exposure</div><div className='col-6 text-end '>0.00</div></div>
                   <div className='row pt-3 pb-3 ps-4 pe-4 border-bottom'><div className='col-6 text-start fs-6 text-muted'>Options Premium</div><div className='col-6 text-end '>0.00</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Colletral (Liquid funds)</div><div className='col-6 text-end'>0.00</div></div>
                   <div className='row pt-3 ps-4 pe-4'><div className='col-6 text-start fs-6 text-muted'>Collateral (Equity)</div><div className='col-6 text-end'>0.00</div></div>
               </div>
               <div className='col-6'></div>
             </div>
    </div>
  )
}

export default FundsPage;

