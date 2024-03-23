import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../../../../Css/style.css";

const Rigestar = () => {
  return (
    <Fragment>
        <section className="all">
        <div className="login-box">
        <h2>Rigester Admin</h2>
        <form 
          className='row' 
          method='post' 
          action='../Components/Home.jsx'
        >
          <div className="user-box col-6">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box col-6">
            <input type="email" name required />
            <label>Email</label>
          </div>
          <div className="user-box col-6">
            <input type="tel" name required />
            <label>Phone</label>
          </div>
          <div className="user-box col-6">
            <input type="date" name required />
            <label>BirthDay</label>
          </div>
          <div className="user-box col-6">
            <input type="password" name required />
            <label>Password</label>
          </div>
          
          <div className="user-box col-6">
            <input type="password" name required />
            <label>Confirm Password</label>
          </div>
          <div className="user-box col-6 ">
              <select className="form-select select">
                <option>Country</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="user-box col-6 ">
              <select className="form-select select">
                <option>Government</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            
            <div className="col-6 mt-20">
              <div className="flex gender">
                <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Gender:
                  </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
          <Link href="#" className='col-12'>
            <span />
            <span />
            <span />
            <span />
            Register
          </Link>
        </form>
        </div>
        </section>
    </Fragment>
  )
}

export default Rigestar
