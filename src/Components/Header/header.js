import React from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Header = () => {
  return (
    <header>
      <div className="head_two container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="h1_top">Lorem ipsum is dummy content <br />Grocduls </h1>
            <p className="p_top">Lorem ispum is simply dummy text of the printing and type setting industry. Lorem ispme is the industry standard dummy test ever since 1500s.</p>
            <button className="btn_header btn btn-primary">Start for free</button>
            <div className="sec_one">
              <div className="company_para">
                <p>We are trusted for 1000+ companies.</p>
              </div>
            </div>
            <div className="sec_two">
              <div className="partone_img">
                <img className="images" src="https://www.nicepng.com/png/detail/880-8808596_png-file-svg-google-black-and-white-logo.png"></img>
                <img className="images" src="https://p.kindpng.com/picc/s/29-297023_netflix-logo-png-black-banner-black-and-white.png"></img>
              </div>
              <div>
                <img className="images" src="https://www.pngitem.com/pimgs/m/132-1322127_airbnb-logo-white-png-transparent-png.png"></img>
                <img className="images" src="https://www.citypng.com/public/uploads/preview/-11596307623br3hlq9vjt.png"></img>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="part_two">
              <div className="box_one"></div>
              <div className="box_two"></div>
              <div className="box_three">
                <img className="orange" src="https://media.istockphoto.com/id/1138358765/photo/stressed-man-in-hat-screaming.jpg?s=612x612&w=0&k=20&c=tmBQ56HNGr23Xb57w6Xcg7IKOqonCjwQr0KmNxlBens="></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
