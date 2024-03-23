import React, { Fragment } from "react";
import "../../Css/style.css";
import img from "../../assets/Image/pharaoh.png";
import { useTranslation } from 'react-i18next';
import { Link} from "react-router-dom";
import DarkToLight from "./DarkToLight";
import egy from '../../assets/Image/Egypt.jpg'
import USA from '../../assets/Image/U.S.A.jpg'
import FR from '../../assets/Image/france.jpg'
const Navbar = () => {

const [t, i18n] = useTranslation()
  
  return (
    
    <Fragment>
      <div className="nav">
      
        <div className="logo">
          <img src={img} />
          <h1>EGYPT Toursim</h1>
        </div>

        <div className="links">
        <div className="dropdown">
            <button className="dropbtn" data-i18n="login">Login</button>
            <div className="dropdown-content"> 
              <Link href="#" to={"/admin/login"}>
                {t('admin')}
              </Link>
             
              <Link href="#" to={"/user/login"}>
                User
              </Link>
            </div>
          </div>
            <li><a href="#Discover" data-i18n="discover">Discover</a> </li>
            <li><a href="#Gallery" data-i18n="gallery">Gallery</a> </li>
            <li><a href="#Services" data-i18n="services">Services</a> </li>
            <li><a href="#about" data-i18n="about">About</a> </li>
            <li><a href="#contact" data-i18n="contact_us">Contact Us</a> </li>
        </div>
        <div className="icons-nav">
          <DarkToLight/>  
          <select>
            <option data-i18n="slectLanguage">Lang</option>
            <option data-i18n="english" value="en">En</option>
            <option data-i18n="arabic" value="ar">ar</option>
            <option data-i18n="france">Fr</option>
          </select>
        </div>

      </div>
        
    </Fragment>
  );
};

export default Navbar;
