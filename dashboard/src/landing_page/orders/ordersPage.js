import React from 'react';


function OrdersPage() {
  return (
    <div className='bg-white' style={{ position: "relative", height: "90vh", width: "60%", left: "40%", bottom: "90vh" }}>
            <div className='text-center mt-4'>
              <div><i class="fa-solid fa-book-open mt-3 me-1 fs-1"></i></div>
              <p className='text-muted opacity-75'>You haven`t place any orders today</p>
              <button className='bg-primary p-2 text-white' style={{borderRadius:"10px", border:"none"}}>Get Started</button>
            </div>
    </div>
  )
}

export default OrdersPage;

