import React, { Fragment } from 'react'
import "../../../Css/style.css";
import Slider from './Slider';
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
                Profile admin
              </h4>
            </div>


          </div>
        </div>
      </div>

    
    </Fragment>
  )
}

export default Profile
