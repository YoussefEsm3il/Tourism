import React, { Fragment, useState } from "react";
import Slider from "../Slider";
import { useDispatch } from "react-redux";
import { PiBus } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaCity } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { TicketSlice } from "../../../Redux/TicketSlice";
import { TiPlus } from "react-icons/ti";
import Apidata from "../../../../Apidata";

const Trips = (props) => {
  const [data,] = useState(Apidata)
  const dispatch = useDispatch()
  return (
    <Fragment>
    
      <div className="all-page">
        <div className="card-left">
          <Slider />
        </div>
        <div className="card-rhite">
          <div className="section3">
            <div className="text">
              <h4>Trips</h4>
            </div>
            <button className="add">
            <TiPlus className="p-add"/>
            </button>
              <main class="page-content">
                    {
                      data.map(item=>(
                        <div className="card" key={item.id}>
                          <div className="images">
                            <div className="img-x">
                              <img src={item.images[0].url} alt='image 12' />
                            </div>
                            <div className="img-s">
                            {
                              item.images.map(image=>(
                                <img src={image.url} />
                              ))
                            }
                              {/* <img src={img2} />
                              <img src={img3} />
                              <img src={img4} /> */}
                            </div>
                          </div>
                          <div className="text">
                            <div className="txt-top">
                              <h4>
                                <FaHotel
                                  size={25}
                                  style={{ marginRight: 10, marginBottom: 10 }}
                                />{" "}
                                Hotel Name
                              </h4>
                              <p>
                                {" "}
                                <FaCity
                                  size={25}
                                  style={{ marginRight: 10, marginBottom: 10 }}
                                />
                                in Sharm El-Shaikh , in Dahab
                              </p>
                            </div>
                            <div className="txt-bottom">
                              <p>
                                {" "}
                                <CiCalendarDate
                                  size={25}
                                  style={{ marginRight: 10, marginBottom: 10 }}
                                />
                                fri 26 Apr 2024{" "}
                              </p>
                              <p>
                                <MdFoodBank
                                  size={25}
                                  style={{ marginRight: 10, marginBottom: 10 }}
                                />{" "}
                                All Inclusive
                              </p>
                              <p>
                                {" "}
                                <PiBus
                                  size={25}
                                  style={{ marginRight: 10, marginBottom: 10 }}
                                />{" "}
                                Bus Travil
                              </p>
                            </div>
                          </div>
                          <div className="price">
                            <div className="sallary">
                              <p>
                                250$/<span>Day</span>
                              </p>
                            </div>
                            <div className="botton">
                              <button className="btn"
                              onClick={()=>
                              dispatch(TicketSlice.actions.addToTicket(props))}
                              >Book your ticket</button>
                            </div>
                          </div>
                        </div>
                ))
                    }
                    
              </main>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Trips;
