import React, { Fragment } from "react";
import Logo from "../../assets/Image/logo.png";
import call from "../../assets/icon/phone-call.png";
import address from "../../assets/icon/address.png";
import facebook from "../../assets/icon/facebook.png";
import instagram from "../../assets/icon/instagram.png";
import linkedin from "../../assets/Image/linkedin.png";
import work from "../../assets/icon/work.png";
import day from "../../assets/icon/day.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="connect">
          <div className="about_as">
            <img src={Logo} alt="logo" />
            <p>
              EgyTourism is web application that display information and
              historical details about monuments and Artifacts via panoramic
              photos, 3D Picture, videos
            </p>
          </div>
          <div className="call">
            <h2>Contact info</h2>
            <div>
              <img src={call} alt="call" />
              <p>01143486455</p>
            </div>
            <div>
              <img src={address} alt="addres" />
              <p>Coumpund Hours 6th O'ctober</p>
            </div>
            <div className="icons">
              <Link to={"https://www.facebook.com/jo.somaa/"}>
                <div>
                  <img src={facebook} alt="facebook" />
                </div>
              </Link>
              <Link to={"https://www.instagram.com/youssef_esm3el/"}>
                <div>
                  <img src={instagram} alt="instagram" />
                </div>
              </Link>
              <Link to={"https://www.linkedin.com/in/youssef-ismail-kamel/"}>
                <div>
                  <img src={linkedin} alt="map" />
                </div>
              </Link>
            </div>
          </div>
          <div className="businees">
            <h2>business hours</h2>
            <h3>working days:</h3>
            <div>
              <img src={work} alt="work" />
              <p>Saturday To Thursday 8 AM - 4:30 PM</p>
            </div>
            <h3>Vacations:</h3>
            <div>
              <img src={day} alt="day" />
              <p>Friday &amp; Official Holidays</p>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p>Copyright ©2024 All rights reserved to EgyTourism.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
