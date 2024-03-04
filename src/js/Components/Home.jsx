import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import "../../Css/style.css";
import Video from "../../assets/Video/EgyTourism.mp4";
import image from "../../assets/Image/image 1.jpg";
import airplan from "../../assets/Image/airplane-ticket.png";
// import multimedia from "../../assets/Image/multimedia-player.png";
import virtual_tour from "../../assets/Image/virtual-tour.png";
import hieroglyph from "../../assets/Image/hieroglyph.png";
import Playbtn from "../../assets/Image/play-button.png";
const Home = () => {
  return (
    <Fragment>
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
            <Link href="#"  to={'/login'} className="btnone">
              Login
            </Link>
            <Link href="#" to={'/register'} className="btntwo">
              Register
            </Link>
          </section>
        </main>
        {/* end section 1 */}
        {/* start section 2 */}
        <div className="section2">
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
        <div className="section3">
          <div className="text">
            <h1>Our Services</h1>
          </div>
          <div className="services">
            <Link href='#' to={'/discover-egypt'}>
            <div>

              <img src={hieroglyph}/>
              <h5>Discover Ancient Egypt</h5>
            </div>
            </Link>
            <Link href='#' to={'/recordings'}>
            <div>

              <img src={virtual_tour}/>
              <h5>Listen To Voice Records</h5>
            </div>
            </Link>
            {/* <div>
              <img src={multimedia} alt />
              <h5>Buy Account and pay money</h5>
            </div> */}
            <Link href='' to={'/trips'}>
            <div>

              <img src={airplan}/>
              <h5>Reserve Flights and come</h5>
            </div>
            </Link>
          </div>
        </div>
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
              <Link href='#' to={'/video'}>watch video</Link>
            </div>
          </div>
        </div>
        {/* end section4 */}
        {/* start section5 */}
        <div className="section5">
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
          </div>
        </div>
        {/* end section5 */}
      </div>

    </Fragment>
  );
};

export default Home;
