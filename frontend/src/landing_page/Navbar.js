import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const isLoggedIn = !!localStorage.getItem("token"); // Or any auth state/token

  const handleLogout = () => {
    localStorage.clear(); // Or remove token/session
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-white border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="images/media/logo.jpg" alt="logo" width="120" style={{height:"10%", width:"10%" , borderRadius:"10px"}}/><h3 className='d-inline ms-3'>TradX</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="http://localhost:3000">Dashboard</Link> { /* change after deploy*/}
            </li>

            {isLoggedIn && (
              <li className="nav-item">
                <button className="btn btn-outline-danger ms-3" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
