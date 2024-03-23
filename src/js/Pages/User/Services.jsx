
import React, { Fragment } from "react";
import Footer from "../../Components/Footer";
import { Link } from 'react-router-dom';
import hieroglyph from '../../../assets/Image/hieroglyph.png'
import virtual_tour from '../../../assets/Image/virtual-tour.png'
import airplan from '../../../assets/Image/airplane-ticket.png'
import Slider from './Slider'
import '../../../Css/style.css'
const Trips = () => {
  return (
    <Fragment>
        <div className="all-page">
        <div className="card-left">
          <Slider/>
        </div>
        <div className="card-rhite">
        <div className="section3" >
          <div className="text">
            <h1>Our Services</h1>
          </div>
          <div className="services">
            <Link href="#" to={"/user/discover-egypt"}>
              <div>
                <img src={hieroglyph} />
                <h5>Discover Ancient Egypt</h5>
              </div>
            </Link>
            <Link href="#" to={"/user/recordings"}>
              <div>
                <img src={virtual_tour} />
                <h5>Listen To Voice Records</h5>
              </div>
            </Link>
            {/* <div>
              <img src={multimedia} alt />
              <h5>Buy Account and pay money</h5>
            </div> */}
            <Link href="#" to={"/user/trips"}>
              <div>
                <img src={airplan} />
                <h5>Reserve Flights and come</h5>
              </div>
            </Link>
          </div>
        </div>
        </div></div>
        
      <Footer/>
    </Fragment>
  );
};

export default Trips;
