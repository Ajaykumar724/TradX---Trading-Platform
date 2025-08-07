import React from 'react';
import "../../about.css";

function Team() {
    return (
        <div className='container mt-5 pt-2'>
            <h2 className='text-center'>People</h2>
            <div className='CEO-info row mt-5 pt-3'>
                <div className='col-2'></div>
                <div className='mb-5 col-4 text-center'>
                    <img src='images/media/ajay.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Ajay Kumar</div>
                    <div className='CEO-intro mt-2'>Founder, CEO</div>
                </div>
                <div className='CEO-des col-5 mt-4'>
                    Ajay bootstrapped and founded TradX in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradX has changed the landscape of the Indian broking industry.<br></br><br></br>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br></br><br></br>
                    Playing basketball is his zen.<br></br><br></br>
                    Connect on <a href='./' className='CEO-des-link'>Homepage</a> / <a href='https://www.linkedin.com/in/ajay-kumar-b97b38313/' className='CEO-des-link'>Linkedin</a> / <a href='#' className='CEO-des-link'>Twitter</a>
                </div>
                <div className='col-1'></div>
            </div>
            <div className='Employ-info mt-5 pt-5 row mb-5'>
                <div className='mb-5 col-4 text-center'>
                    <img src='images/media/Nikhil.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Nikhil Kamath</div>
                    <div className='CEO-intro mt-2'>Co-founder & CFO</div>
                </div>
                <div className='mb-5 col-4 text-center'>
                    <img src='images/media/Kailash.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Dr. Kailash Nadh</div>
                    <div className='CEO-intro mt-2'>CTO</div>
                </div>
                <div className='mb-5 col-4 text-center'>
                    <img src='images/media/Venu.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Venu Madhav</div>
                    <div className='CEO-intro mt-2'>COO</div>
                </div>
                <div className='mb-5 col-4 text-center'>
                    <img src='images/media/Hanan.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Hanan Delvi</div>
                    <div className='CEO-intro mt-2'>CCO</div>
                </div>
                <div className='mb-5 col-4 text-center'>
                    <img src='images/media/Seema.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Seema Patil</div>
                    <div className='CEO-intro mt-2'>Director</div>
                </div>
                <div className='mb-5 col-4 text-center'>
                    <img src='images/media/karthik.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Karthik Rangappa</div>
                    <div className='CEO-intro mt-2'>Chief of Education</div>
                </div>
                <div className='col-4 text-center'>
                    <img src='images/media/Austin.jpg' className='founder-img'></img>
                    <div className='CEO-name mt-3'>Austin Prakesh</div>
                    <div className='CEO-intro mt-2'>Director Strategy</div>
                </div>
                
            </div>
        </div>
    );
}

export default Team;