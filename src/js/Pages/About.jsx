import React, { Fragment } from "react";
import Myphoto from "../../assets/Image/My Photo.jpg";
import "../../Css/style.css";
const About = () => {
  return (
    <Fragment>
      <div className="f-page">
        <h2>About Me</h2>
        <div className="cards">
          <div className="c-about">
            <p>
              EgyTourism is web application that display information and
              historical details about monuments and Artifacts via panoramic
              photos, 3D Picture, videos
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
