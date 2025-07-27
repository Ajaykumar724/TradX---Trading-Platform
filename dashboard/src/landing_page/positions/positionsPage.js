import React from 'react';

import { positions } from "./../../data/data.js";


function PositionsPage() {
  return (
    <div className='bg-white m-3' style={{ position: "relative", height: "90vh", width: "60%", left: "40%", bottom: "90vh" }}>
      <div className='fs-5 text-muted'>Positions ({positions.length})</div>

      <div className='row holdings-data mt-4 pt-3 pb-3 border-top border-bottom'>
        <div className='col-3'>
          <div className='head'>Product</div>
        </div>
        <div className='col'>
          <div className='head'>Instrument</div>
        </div>
        <div className='col'>
          <div className='head'>Qty.</div>
        </div>
        <div className='col'>
          <div className='head'>Avg.</div>
        </div>
        <div className='col'>
          <div className='head'>LPT</div>
        </div>
        <div className='col'>
          <div className='head'>P&L</div>
        </div>
        <div className='col'>
          <div className='head'>Chg.</div>
        </div>
      </div>

      {positions.map((stock, index) => {
        const curValue = stock.price * stock.qty;
        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
        const profClass = isProfit ? "profit" : "loss";
        const dayClass = stock.isLoss ? "loss" : "profit";

        return (
          <div className='row holdings-data pt-2 pb-2 border-bottom'>
            <div className='col-3'>
              <div className='head text-center text-danger' style={{ height: "100%", width: "30%", background: "#e2b9b9ff" }}>{stock.product}</div>
            </div>
            <div className='col'>
              <div className='head'>{stock.name}</div>
            </div>
            <div className='col'>
              <div className='head'>{stock.qty}</div>
            </div>
            <div className='col'>
              <div className='head'>{stock.avg.toFixed(2)}</div>
            </div>
            <div className='col'>
              <div className='head'>{stock.price.toFixed(2)}</div>
            </div>
            <div className='col'>
              <div className={profClass} style={{ fontSize: "10px" }}>{(curValue - stock.avg * stock.qty).toFixed(2)}</div>
            </div>
            <div className='col'>
              <div className={profClass} style={{ fontSize: "10px" }}>{stock.day}</div>
            </div>
          </div>
        );
      })}

      <div className='row holdings-data pt-2 pb-2 border-bottom'> 
        <div className='col-3'>

        </div>
        <div className='col'>

        </div>
        <div className='col'>

        </div>
        <div className='col'>

        </div>
        <div className='col'>
          <div className='head'>Total</div>
        </div>
        <div className='col'>
          <div className='head'>-44.65</div>
        </div>
        <div className='col'>

        </div>
      </div>


    </div>
  )
}

export default PositionsPage;

