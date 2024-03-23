import React, { Fragment, useState } from "react";
import img from "../../../assets/Image/pharaoh.png";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoTicketSharp } from "react-icons/io5";
// import { RiMenuFoldLine } from "react-icons/ri";
// import { RiMenuUnfoldLine } from "react-icons/ri";

import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

import userphoto from "../../../assets/Image/userphoto.jpg";
import DarkToLight from "../../Components/DarkToLight";

const Slider = () => {
  // let btnOpen = document.getElementById('open')
  // let btnClose = document.getElementById('close')
  // let slider = document.querySelector('.slider')

  // btnClose.onclick = function(){
  //     slider.classList.add('hide');
  //     btnClose.classList.add('hide');
  //     btnOpen.classList.remove('hide');
  // }

  // btnOpen.onclick = function(){
  //     slider.classList.remove('hide');
  //     btnClose.classList.remove('hide');
  //     btnOpen.classList.add('hide');
  // }

  return (
    <Fragment>
      {/* <RiMenuUnfoldLine   className="icon" id="open" /> */}
      <div className="slider">
        <div className="logo">
          <img src={img} />
          <h5>EGYPT Toursim</h5>
          <DarkToLight/>
          {/* <RiMenuFoldLine  className="icon" id="close" /> */}
        </div>
        <hr></hr>

        <div className="s-all">
          <div className="s-links">
            <div className="s-link">
              <div className="s-logo">
                <CgProfile className="icon" />
              </div>
              <div className="p-slider">
                <Link to={"/user/profile"}>Profile</Link>
              </div>
            </div>

            <div className="s-link">
              <div className="s-logo">
                <FaHome className="icon" />
              </div>
              <div className="p-slider">
                <Link to={"/user/home"}>Home</Link>
              </div>
            </div>

            <div className="s-link">
              <div className="s-logo">
                <FaServicestack className="icon" />
              </div>
              <div className="p-slider">
                <Link to={"/user/services"}>Services</Link>
              </div>
            </div>

            <div className="s-link">
              <div className="s-logo">
                <FaPhotoVideo className="icon" />
              </div>
              <div className="p-slider">
                <Link to={"/user/gallery"}>Gallery</Link>
              </div>
            </div>

            <div className="s-link">
              <div className="s-logo">
                <MdFavorite className="icon" />
              </div>
              <div className="p-slider">
                <Link to={"/user/favorite"}>Favorite</Link>
              </div>
            </div>
            <div className="s-link">
              <div className="s-logo">
                <IoTicketSharp className="icon" />
              </div>
              <div className="p-slider">
                <Link to={"/user/ticket"}>Tickets</Link>
              </div>
            </div>

            <div className="s-link">
              <div className="s-logo">
                <IoMdSettings className="icon" />
              </div>
              <div className="p-slider">
                <Link to={"/user/setting"}>Settings</Link>
              </div>
            </div>

            <div className="s-link">
              <div className="s-logo">
                <LuLogOut className="icon" />
              </div>
              <div className="p-slider">
                <Link to={'/'}>Logout</Link>
              </div>
            </div>
          </div>

          <div className="profile">
            <div className="image">
              <img src={userphoto} />
            </div>
            <p>User Name</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Slider;
