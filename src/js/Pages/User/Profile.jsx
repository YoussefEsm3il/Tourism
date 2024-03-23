import React, { Fragment } from 'react'
import Slider from "./Slider";
import "../../../Css/style.css";
import bg from '../../../assets/Image/Mohamed ali.jpg'
import profile from '../../../assets/Image/userphoto.jpg'
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <Fragment>
        <div className="all-page">
        <div className="card-left">
          <Slider />
        </div>
        <div className="card-rhite">
          <div className="section3">
            <div className="text">
              <h4>
                Profile user
              </h4>
            </div>
            <div className='image-profile'>
                <img src={bg} className='bg'/>
                <img src={profile} className='img-profile'/>
            </div>
            <div>
              <h2 style={{marginTop:150}}>Youssef Esmail</h2>
            </div>
            <div className='edit-profile'>
              {/* <div className='btn-edit'>
              
              </div> */}
                <div className='links-profile'>
                    <Link href='ُ#'>Gallery</Link>
                    <Link href='#'>Videos</Link>
                </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Profile
