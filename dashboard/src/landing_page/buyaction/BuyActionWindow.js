import React from 'react';
import { Link } from "react-router-dom";

import { useContext } from 'react';
import GeneralContext from '../generalcontext/GeneralContext';
import { useState } from 'react';

import  axios  from 'axios';

// import GeneralContext from '../generalcontext/GeneralContext';




const BuyActionWindow = ({ uid }) => {

    // const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const { closeBuyWindow } = useContext(GeneralContext);
   
    const handleBuyClick = () => {
        axios.post('http://localhost:3002/newOrder', {
            name: uid,  // undefined
            qty: stockQuantity,
            price: stockPrice,
            mode: "Buy",
        });
        closeBuyWindow();
    }

    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        <div className='container rounded' id='buy-window'>
            <div className='inputs text-center'>
                <label>
                    Qty.
                    <input name="myInput" className='m-2 rounded p-1' id='qty' onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity} />
                </label>
                <label>
                    Price
                    <input name="myInput" className='m-2 rounded p-1' id='price' onChange={(e) => setStockPrice(e.target.value)} value={stockPrice} />
                </label>
            </div>
            <div className='text-end m-2 me-5'>
                <Link className='rounded border m-2 btn btn-dark' onClick={handleBuyClick}>Buy</Link>
                <Link to="" className='rounded border m-2 btn grey' onClick={handleCancelClick}>Cancel</Link>
            </div>
        </div>
    )
}

export default BuyActionWindow;

