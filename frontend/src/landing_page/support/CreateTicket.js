import React from 'react';
import "../../support.css";

function CreateTicket() {
    return (
        <div className='container row offset-2'>
            <div className='col-6 tickets'>
                <a href='#' className='rounded border mt-4 pb-3 mb-4 row'>
                    <div className='col-1'> <i class="fa-solid fa-book-open mt-3 me-1 fs-4"></i></div>
                    <div className='col mt-3'>Account Opening</div>
                    <div className='col text-end mt-3'><i class="fa-solid fa-arrow-right arrow"></i></div>
                </a>
                <a href='#' className='rounded border mt-4 pb-3 mb-4 row'>
                    <div className='col-1'> <i class="fa-solid fa-book-open mt-3 me-1 fs-4"></i></div>
                    <div className='col mt-3'>Your TradX Account</div>
                    <div className='col text-end mt-3'><i class="fa-solid fa-arrow-right arrow"></i></div>
                </a>
                <a href='#' className='rounded border mt-4 pb-3 mb-4 row'>
                    <div className='col-1'> <i class="fa-solid fa-book-open mt-3 me-1 fs-4"></i></div>
                    <div className='col mt-3'>Kite</div>
                    <div className='col text-end mt-3'><i class="fa-solid fa-arrow-right arrow"></i></div>
                </a>
                <a href='#' className='rounded border mt-4 pb-3 mb-4 row'>
                    <div className='col-1'> <i class="fa-solid fa-book-open mt-3 me-1 fs-4"></i></div>
                    <div className='col mt-3'>Funds</div>
                    <div className='col text-end mt-3'><i class="fa-solid fa-arrow-right arrow"></i></div>
                </a>
                <a href='#' className='rounded border mt-4 pb-3 mb-4 row'>
                    <div className='col-1'> <i class="fa-solid fa-book-open mt-3 me-1 fs-4"></i></div>
                    <div className='col mt-3'>Console</div>
                    <div className='col text-end mt-3'><i class="fa-solid fa-arrow-right arrow"></i></div>
                </a>
                <a href='#' className='rounded border mt-4 pb-3 mb-4 row'>
                    <div className='col-1'> <i class="fa-solid fa-book-open mt-3 me-1 fs-4"></i></div>
                    <div className='col mt-3'>Coin</div>
                    <div className='col text-end mt-3'><i class="fa-solid fa-arrow-right arrow"></i></div>
                </a>
            </div>


            <div className='col-6'>
                <div className='p-4 ms-5 mt-5 border-start border-warning border-5 ' style={{ height: "150px", width: "390px", background: "#f5e7d5ff" }}>
                    <ul>
                        <a href='#' className='text-decoration-none'><li className='mb-3'>Quarterly Settlement of Funds - July 2025</li></a>
                        <a href='#' className='text-decoration-none'><li>Exclusion of F&O contracts on 8 securities from August 29, 2025</li></a>
                    </ul>
                </div>

                <div className='m-5 ms-5 pe-5'>
                    <table class="table border">
                        <thead>
                            <tr>
                                <th scope="col-5" className='table-light fw-medium'>Quick links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href='#' className='text-decoration-none'>1. Track account opening</a></td>
                            </tr>
                            <tr>
                                <td><a href='#' className='text-decoration-none'>2. Track segment activation</a></td>
                            </tr>
                            <tr>
                                <td><a href='#' className='text-decoration-none'>3. Intraday margins</a></td>
                            </tr>
                            <tr>
                                <td><a href='#' className='text-decoration-none'>4. Kite user manual</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;