import React from 'react';
import "../../about.css";

function Home() {
    return (
        <div className='container mt-5'>
            <div className='tag-line text-center mt-5 pt-5 mb-5 pb-5'>
                <h2>
                    We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology.
                </h2>
            </div>
            <hr></hr>
            <div className='tag-des row offset-2 mt-5 pt-5'>
                <div className='right-des col-5'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company TradX, a combination of Zero and "Rodha", the Sanskrit word for barrier.<br></br><br></br>
                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.<br></br><br></br>
                    Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</div>
        
                <div className='left-des col-5'>
                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.<br></br><br></br>
                    <a href='#' className='tag-des-link'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.<br></br><br></br>
                    And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='#' className='tag-des-link'>blog</a> or see what the media is <a href='#' className='tag-des-link'>saying about us</a> or learn more about our business and product <a href='#'  className='tag-des-link'>philosophies</a>.
                </div>
            </div>
        </div>
    );
}

export default Home;