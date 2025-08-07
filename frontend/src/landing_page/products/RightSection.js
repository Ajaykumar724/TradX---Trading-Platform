import React from 'react';


function RightSection({productName, productDes, below, link, productImage}) {
    return ( 
        <div className='container row offset-1 mt-5 pt-5 '>
            <div className='col-1'></div>
            
            <div className='right-content col-5'>
                <h3>{productName}</h3>
                <div className='console-des mt-3'>
                    {productDes}                </div>
                <div className='console-btns row mt-3 mb-4'>
                    <div className='col-6'><a href={link} className='link-underline link-underline-opacity-0'>{below}  <i class="fa-solid fa-arrow-right"></i></a></div>
                </div>
            </div>

            <div className='left-img col-6'>
                <img src={productImage} alt='console_image' className='console-image'></img>
            </div>
        </div>
     );
}

export default RightSection;