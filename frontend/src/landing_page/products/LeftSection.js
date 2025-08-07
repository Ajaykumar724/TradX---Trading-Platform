import React from 'react';
import "../../products.css";

function LeftSection({leftImage, productName, productDes, tryDemo, learnMore, googlePlayLink, appStoreLink}) {
    return (
        <div className='container row offset-1 mt-5 mb-5 pb-5'>
            <div className='col-1'></div>
            <div className='left-img col-6'>
                <img src={leftImage} alt='kite_image' className='kite-image'></img>
            </div>
            <div className='left-content col-5 mt-5'>
                <h3>{productName}</h3>
                <div className='kite-des mt-3'>
                    {productDes}                </div>
                <div className='kite-btns row mt-3 mb-4'>
                    <div className='col-6'><a href={tryDemo} className='link-underline link-underline-opacity-0'>Try Demo  <i class="fa-solid fa-arrow-right"></i></a></div>
                    <div className='col-6'><a href={learnMore} className='link-underline link-underline-opacity-0'>Learn more  <i class="fa-solid fa-arrow-right"></i></a></div>
                </div>
                <div className='install-links row'>
                    <a href={googlePlayLink} className='col-6 inst-link'><img src='/images/media/googlePlayBadge.svg' alt='play-store' ></img></a>
                    <a href={appStoreLink} className='col-6 inst-link'><img src='/images/media/appstoreBadge.svg' alt='app-store' ></img></a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;