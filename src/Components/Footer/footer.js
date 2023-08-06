import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="h1_tag">Subscribe to Our Newshelter</h1>
            <h1>Logo</h1>
            <p>Offal shabal chic hoodie gentrify truffaut.</p>
            <div className="social-icons">
              <p className="follow">Follow us</p>
              <i className="fa fa-facebook fb"></i>
              <i className="fa fa-twitter twit"></i>
              <i className="fa fa-instagram insta"></i>
            </div>
            <div>
              <p>
                Copyright:@ 2023 Grocduls Pvt Ltd by Indian Company.All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="col-md-3"> {/* Step 2: Use col-md-* for medium-sized devices */}
            <h3 className="foot_h3">Company</h3>
            <p className="p_last">About Us</p>
            <p className="p_last">Contact Us</p>
            <p className="p_last">Career</p>
            <p className="p_last">Blog</p>
          </div>
          <div className="col-md-3"> {/* Step 2: Use col-md-* for medium-sized devices */}
            <h3 className="foot_h3">Product</h3>
            <p className="p_last">Pricing Product</p>
            <p className="p_last">Mobile Apps</p>
            <p className="p_last">Updates</p>
            <p className="p_last">WordPress</p>
            <p className="p_last">Web Security</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"> {/* Step 2: Use col-md-* for medium-sized devices */}
            <h3 className="foot_h3">Legal</h3>
            <p className="p_last">Privacy Policy</p>
            <p className="p_last">Terms of Service</p>
          </div>
          <div className="col-md-3"> {/* Step 2: Use col-md-* for medium-sized devices */}
            <h3 className="foot_h3">Help</h3>
            <p className="p_last">Payment Method</p>
            <p className="p_last">Knowledge Base</p>
            <p className="p_last">Tutorial</p>
          </div>
          <div className="col-md-6"> {/* Step 2: Use col-md-* for medium-sized devices */}
            <div className="subscribe">
              <p className="p_subs">Subscribe to our email newsletter</p>
              <input className="subs_input" placeholder="Your Email"></input>
              <button className="subs_btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
