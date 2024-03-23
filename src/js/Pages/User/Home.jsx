import React, { Fragment } from "react";
import Footer from "../../Components/Footer";
import Slider from "./Slider";
import "../../../Css/style.css";
const Trips = () => {
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
                Hello{' '}<span> UserName</span>
              </h4>
            </div>


          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Trips;
