import React, { Fragment } from "react";
import "../../Css/style.css";
const Contact = () => {
  return (
    <Fragment>
      <div className="container">
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
                  Want to Know More?? Drop Us a Mail
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
                      defaultValue={"Your message here..."}
                    />
                  </div>
                  <div className="clearfix">
                    <button type="submit" defaultValue="Send" >Send Messege</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
