import React from 'react';

function Footer() {
  return (
    <div className="card p-4" style={{ background: "#fcfcfc" }}>
      <div className="row gy-4">
        <div className="col-md-4 col-sm-12 px-4">
          {/* <img src="images/media/logo.svg" alt="logo" width="40%" /> */}
          <img src="images/media/logo.jpg" alt="logo" width="120" style={{height:"15%", width:"15%" , borderRadius:"10px"}}/><h4 className='d-inline ms-3'>TradX</h4>
          <p className="mt-3">
            © 2010 - 2025, TradX Broking Ltd.
            <br />
            All rights reserved.
          </p>
          <div className="soc-links d-flex gap-3 mb-2 flex-wrap">
            <i className="fa-brands soc fa-x-twitter"></i>
            <i className="fa-brands soc fa-square-facebook"></i>
            <i className="fa-brands soc fa-instagram"></i>
            <i className="fa-brands soc fa-linkedin"></i>
          </div>
          <hr className="fw-lighter" />
          <div className="soc-links d-flex gap-3 flex-wrap">
            <i className="fa-brands soc fa-youtube"></i>
            <i className="fa-brands soc fa-whatsapp"></i>
            <i className="fa-brands soc fa-telegram"></i>
          </div>
        </div>

        <div className="col-md-2 col-sm-6 px-4">
          <h5 className="fw-bold mb-3"><a className="footinfo" href="">Company</a></h5>
          {["About", "Products", "Pricing", "Referral programme", "Careers", "Zerodha.tech", "Open source", "Press & media", "Zerodha Cares (CSR)"].map((item, i) => (
            <p key={i}><a className="footinfo" href="">{item}</a></p>
          ))}
        </div>

        <div className="col-md-2 col-sm-6 px-4">
          <h5 className="fw-bold mb-3"><a className="footinfo" href="">Support</a></h5>
          {["Contact us", "Support portal", "Z-Connect blog", "List of charges", "Downloads & resources", "Videos", "Market overview", "How to file a complaint?", "Status of your complaints"].map((item, i) => (
            <p key={i}><a className="footinfo" href="">{item}</a></p>
          ))}
        </div>

        <div className="col-md-4 col-sm-12 px-4">
          <h5 className="fw-bold mb-3"><a className="footinfo" href="">Account</a></h5>
          {["Open an Account", "Fund Transfer"].map((item, i) => (
            <p key={i}><a className="footinfo" href="">{item}</a></p>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 text-muted" style={{ fontSize: "10px", textAlign: "left" }}>
        <div className="px-3">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal...
          </p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>Investments in securities market are subject to market risks...</p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins...
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs...
          </p>
        </div>
      </div>

      <div className="row justify-content-center text-center mt-3 gx-2 px-3">
        {["NSE", "BSE", "MCX", "Terms & conditions", "Polices & procedures", "Privacy Policy", "Disclosure", "For investor's attention", "Investor charter"].map((item, i) => (
          <a key={i} href="" className="col-md-auto col-sm-4 footinfo mostfooter mb-2">{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
