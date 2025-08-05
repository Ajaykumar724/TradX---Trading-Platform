import React from 'react';


function AppsPage() {
  return (
    <div className='bg-white text-center mt-5' style={{ position: "relative", height: "90vh", width: "60%", left: "55%", bottom: "90vh" }}>
      <div className="card shadow-sm border-0 rounded-4 mb-4" style={{ maxWidth: "22rem" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="card-title fw-bold mb-1">AAPL</h5>
              <p className="card-subtitle text-muted small">Apple Inc.</p>
            </div>
            <span className="badge bg-success bg-opacity-10 text-success fw-semibold px-3 py-1">
              +1.24%
            </span>
          </div>

          <hr className="my-3" />

          <div className="d-flex justify-content-between">
            <span className="text-muted small">Current Price</span>
            <span className="fw-semibold fs-5">$192.21</span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <small className="text-secondary">Updated: 2 mins ago</small>
            <i className="bi bi-arrow-right text-muted"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppsPage;

