import React,{useState, useEffect} from 'react';
import "./../../index.css";

// import { holdings } from "./../../data/data.js";

import axios from 'axios';
import { VerticalChart } from '../chart/VerticalChart';



function HoldingsPage() {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      console.log(res.data);
      setAllHoldings(res.data);
    });
  },[]);

  const labels = allHoldings.map((subArray)=>subArray["name"]);

  const data = {
    labels,
    datasets : [
      {
      label: 'Price',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    ],
  };

  return (
    <div className='bg-white m-3' style={{ position: "relative", height: "90vh", width: "60%", left: "40%", bottom: "90vh" }}>
      <div className='fs-5 text-muted'>Holdings ({allHoldings.length})</div>
      <div className='row holdings-data mt-5 pt-2 border-top'>
        <div className='col-2'>
          <div className='head'>Instrument</div>
        </div>
        <div className='col'>
          <div className='head'>Qty.</div>
        </div>
        <div className='col'>
          <div className='head'>Avg. cost</div>
        </div>
        <div className='col'>
          <div className='head'>LPT</div>
        </div>
        <div className='col'>
          <div className='head'>Cur. val</div>
        </div>
        <div className='col'>
          <div className='head'>P&L</div>
        </div>
        <div className='col'>
          <div className='head'>Net chg.</div>
        </div>
        <div className='col'>
          <div className='head'>Day chg.</div>
        </div>
      </div>

      {allHoldings.map((stock, index) => {
        const curValue = stock.price * stock.qty;
        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
        const profClass = isProfit ? "profit" : "loss";
        const dayClass = stock.isLoss ? "loss" : "profit";

        return (
          <div key={index} className='row holdings-data mt-3 pt-2 border-top'>
            <div className='col-2'>
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
              <div className='head'>{curValue.toFixed(2)}</div>
            </div>
            <div className='col'>
              <div className={profClass} style={{fontSize:"10px"}}>{(curValue-stock.avg*stock.qty).toFixed(2)}</div>
            </div>
            <div className='col'>
              <div className={profClass} style={{fontSize:"10px"}}>{stock.net}</div>
            </div>
            <div className='col'>
              <div className={profClass} style={{fontSize:"10px"}}>{stock.day}</div>
            </div>
          </div>
        );
      })}
           <VerticalChart className="sjdklfjiwwen" data={data}/>
    </div>
  )
}

export default HoldingsPage;

