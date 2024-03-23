import React, { Fragment } from 'react'
import Slider from "./Slider";
import "../../../Css/style.css";
import { useSelector } from 'react-redux';

const Ticket = () => {
  const TicketData = useSelector((state)=>state?.Ticket?.items)
  return (
    <Fragment>
        <div className="all-page">
        <div className="card-left">
          <Slider />
        </div>
        <div className="card-rhite">
          <div className="section3">
            <div className="text">
              <div>
                {
                  TicketData?.map((r)=>r.ticket)
                }
              
              </div>
            </div>


          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Ticket
