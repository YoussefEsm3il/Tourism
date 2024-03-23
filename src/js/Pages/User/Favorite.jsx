import React, { Fragment } from 'react'
import Slider from "./Slider";

const Favorite = () => {
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
                Favorite page
              </h4>
            </div>


          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Favorite
