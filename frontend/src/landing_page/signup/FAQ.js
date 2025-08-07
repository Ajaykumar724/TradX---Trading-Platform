import React from 'react';
import "../../signup.css"

function FAQ() {
    return ( 
        <div className='container'>
            <h2>FAQ</h2>
            <div className='quest mt-5'>
                <div className='quest-1'><h3>What is a Demat account?</h3></div>
                <div className='quest-2'><h3>What is technical analysis?</h3></div>
                <div className='quest-3'><h3>What is a trading account?</h3></div>
                <div className='quest-4'><h3>What is fundamental analysis?</h3></div>
                <div className='quest-5'><h3>What is market order vs. limit order?</h3></div>
            </div>
        </div>
     );
}

export default FAQ;