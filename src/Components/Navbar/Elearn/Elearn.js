import React from "react";
import './Elearn.css';
import Main from "../../Main/main";
import Header from "../../Header/header";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Elearn = () => {
  return (
    <div className="our-div">
      <Header />

      <h2>Features</h2>

      <img
        className="le_img img-fluid" 
        src="https://www.beamstacks.com/blog/wp-content/uploads/2017/09/e-learning-banner-1024x385.png"
        alt="Online Education"
      />
      <Main />
    </div>
  );
};

export default Elearn;
