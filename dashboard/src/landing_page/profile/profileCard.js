import React from "react";

const ProfileCard = () => {
    return (
        <div className="card shadow-sm border-0 rounded-4 mb-4" style={{ maxWidth: "24rem" }}>
            <div className="card-body text-center">
                {/* Profile Image */}
                <img
                    src="media/images/ajay.jpg"
                    alt="User"
                    className="rounded-circle border mb-3"
                    width="100"
                    height="100"
                />

                {/* Username and Role */}
                <h5 className="fw-bold mb-1">Ajay Kumar</h5>
                <p className="text-muted small">Active Trader</p>

                {/* Trading Stats */}
                <div className="row mt-4">
                    <div className="col-6 border-end">
                        <h6 className="mb-0 fw-semibold">$48,300</h6>
                        <small className="text-muted">Portfolio Value</small>
                    </div>
                    <div className="col-6">
                        <h6 className="mb-0 fw-semibold text-success">+12.4%</h6>
                        <small className="text-muted">Overall P/L</small>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-6 border-end">
                        <h6 className="mb-0 fw-semibold">152</h6>
                        <small className="text-muted">Trades</small>
                    </div>
                    <div className="col-6">
                        <h6 className="mb-0 fw-semibold">8</h6>
                        <small className="text-muted">Watchlist</small>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Action Button */}
                <button className="btn btn-outline-primary btn-sm rounded-pill px-4">
                    View Portfolio
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
