import React, { Fragment } from "react";
import { Link} from "react-router-dom";
import "../../Css/style.css";
import Video from "../../assets/Video/EgyTourism.mp4";
import image from "../../assets/Image/image 1.jpg";
import Playbtn from "../../assets/Image/play-button.png";
import Footer from "./Footer";
import Navbar from '../Components/Navbar'
import { PiAirplaneTakeoff } from "react-icons/pi";
import { IoRecordingOutline } from "react-icons/io5";
import { GiEgyptianTemple } from "react-icons/gi";


const Home = () => {
  return (
    <Fragment>
    <Navbar/>
      <div className="header">
        {/* start section 1 */}
        <main className="main">
          <section>
            <h3>welcome to egypt</h3>
            <h1>
              do come &amp; visit
              <span className="change_content" />
            </h1>
            <p>"You should visit Egypt"</p>
          </section>
        </main>
        {/* end section 1 */}
        {/* start section 2 */}
        <div className="section2" id='Discover'>
          <div className="ads">ads</div>
          <div className="img">
            <img src={image} alt="image" />
          </div>
          <div className="text">
            <h1>Discover Egypt</h1>
            <br />
            <p />
            EgyTourism is a website that provides information and historical
            details about monuments and Artifacts via panoramic and 3D picture,
            videos... every piece contains (picture, name, year, era, museum,
            type) so that you can know all the information about this piece
            easily.
            <br />
            <br />
            you can scan the QR code of this piece that will redirect you to
            that part page in our website that you will find all the part
            details, images, videos, panoramic 360 images and audio explaining
            the part details.
            <p></p>
          </div>
          <div className="ads">ads</div>
        </div>
        {/* end section2 */}
        {/* start section3 */}
        
        {/* end section3 */}
        {/* start section4 */}
        <div className="section4">
          <video src={Video} controls autoPlay muted />
          <div className="video-text">
            <h2>Discover Egypt</h2>
            <p>
              Egyptian civilization developed along the Nile River in large part
              because the river’s annual flooding ensured reliable, rich soil
              for growing crops. Repeated struggles for political control of
              Egypt showed the importance of the region's agricultural
              production and economic resources.
            </p>
            <div className="btn">
              <img src={Playbtn} alt />
              <Link href="#" to={"/video"}>
                watch video
              </Link>
            </div>
          </div>
        </div>

        
        <div className="section3"  id="Services">
          <div className="text">
            <h1>Our Services</h1>
          </div>
          <div className="services">
            <Link href="#" to={"/user/discover-egypt"}>
              <div>
              <GiEgyptianTemple   className="icons-home"/>

                <h5>Discover Ancient Egypt</h5>
              </div>
            </Link>
            <Link href="#" to={"/user/recordings"}>
              <div>
              <IoRecordingOutline  className="icons-home"/>

                <h5>Listen To Voice Records</h5>
              </div>
            </Link>
            {/* <div>
              <img src={multimedia} alt />
              <h5>Buy Account and pay money</h5>
            </div> */}
            <Link href="#" to={"/user/trips"}>
              <div>
                <PiAirplaneTakeoff className="icons-home"/>
                <h5>Reserve Flights and come</h5>
              </div>
            </Link>
          </div>
        </div>
        
        {/* end section4 */}
        {/* start section5 */}
        <div className="section5" id="Gallery">
          <h2>Gallery</h2>
          <div className="photo">
            {/* <img src={images} alt />x` */}
            {/* <img src="image/image 2.jpg" alt />
            <img src="image/image 3.jpg" alt />
            <img src="image/image 4.jpg" alt />
            <img src="image/image5.webp" alt />
            <img src="image/image6.webp" alt />
            <img src="image/image7.webp" alt />
            <img src="image/image8.webp" alt /> */}
          </div>{/* end section5 */}
        </div>
        <div className="f-page" id='about'>
        <h2>About</h2>
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

      <div className="container section6" id='contact'>
        <div className="innerwrap">
          <section className="section1 clearfix">
            <div className="textcenter">
              <span className="shtext">Contact Us</span>
              <span className="seperator" />
              <h1>Drop Us a Mail</h1>
            </div>
          </section>
          <section className="section2 clearfix">
            <div className="col2 column2 last">
              <div className="sec2innercont">
                <div className="sec2addr">
                  <p>
                    <span className="collig">Address :</span>6 O'ctober City
                  </p>
                  <p>
                    <span className="collig">Phone :</span> +02 011 434 864 55
                  </p>
                  <p>
                    <span className="collig">Email :</span>{" "}
                    ismailyoussef209@gmail.com
                  </p>
                </div>
              </div>
              <div className="sec2contactform">
                <h3 className="sec2frmtitle">
                  Want to Know More?? Drop Us Email
                </h3>
                <form action>
                  <div className="clearfix">
                    <input
                      className="col2 first"
                      type="text"
                      placeholder="FirstName"
                    />
                    <input
                      className="col2 last"
                      type="text"
                      placeholder="LastName"
                    />
                  </div>
                  <div className="clearfix">
                    <input
                      className="col2 first"
                      type="Email"
                      placeholder="Email"
                    />
                    <input
                      className="col2 last"
                      type="text"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="clearfix">
                    <textarea
                      name="textarea"
                      id
                      cols={30}
                      rows={7}
                      placeholder="type messege here"
                      
                    />
                  </div>
                  <div className="clearfix">
                    <button type="submit"
                     defaultValue="Send"
                     >Send Messege</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>

      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
