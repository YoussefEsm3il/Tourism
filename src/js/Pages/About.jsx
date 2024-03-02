import React, { Fragment } from "react";
import Myphoto from "../../assets/Image/My Photo.jpg";
import "../../Css/style.css";
const About = () => {
  return (
    <Fragment>
    
      <div className="f-page">
        <h2>About Me</h2>
        <div className="cards">
          <div className="c-left">
            <img src={Myphoto} />
          </div>
          <div className="c-right">
            <p>
              <span>My Name:</span>Youssef Esmail Kamel
            </p>
            <p>
              <span>Title:</span>Front End Devoloper
            </p>
            <p>
              <span>The university:</span>Madina Academy
            </p>
            <p>
              <span>Age:</span>23 Years
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
