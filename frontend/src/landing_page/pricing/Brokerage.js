import React from 'react';
import "../../pricing.css";

function Brokeage() {
    return (
        <div className='container mt-5 pt-5 mt-5 p-5'>
            <div className='link-optn mb-5'>
                <a href='#' className='link'>Equity</a>
                <a href='#' className='link'>Currency</a>
                <a href='#' className='link'>Commodity</a>
                <hr></hr>
            </div>
            
            <table className="table table-striped table-bordered  ">
                <thead className='opacity-75'>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Equity delivery</th>
                        <th scope="col">Equity intraday</th>
                        <th scope="col">F&O - Futures</th>
                        <th scope="col">F&O - Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Brokeage</th>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                        <th>STT/CTT	</th>
                        <td>0.1% on buy & sell</td>
                        <td>0.025% on the sell side</td>
                        <td>0.02% on the sell side</td>
                        <td><ul><li>0.0125% of the intrinsic value on options that are bought and exercised</li><li>0.1% on sell side (on premium)</li></ul></td>
                    </tr>
                    <tr>
                        <th>Transtion charges</th>
                        <td>NSE: 0.00297% <br></br>
                            BSE: 0.00375%</td>
                        <td>NSE: 0.00297% <br></br>
                            BSE: 0.00375%</td>
                        <td>NSE: 0.00173% <br></br>
                            BSE: 0</td>
                        <td>NSE: 0.03503% (on premium) <br></br>
                            BSE: 0.0325% (on premium)</td>
                    </tr>
                    <tr>
                        <th>GST</th>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr><tr>
                        <th>SEBI charges</th>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr><tr>
                        <th>Stamp charges</th>
                        <td>Zero Brokerage</td>
                        <td>0.015% or ₹1500 / crore on buy side</td>
                        <td>0.002% or ₹200 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default Brokeage;