import React, { Fragment } from 'react'
import "../../Css/style.css";
const Rigestar = () => {
  return (
    <Fragment>
        <section className="all">
        <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="email" name required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="tel" name required />
            <label>Phone</label>
          </div>
          <div className="user-box">
            <input type="date" name required />
            <label>BirthDay</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          
          <div className="user-box">
            <input type="password" name required />
            <label>Confirm Password</label>
          </div>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            Register
          </a>
        </form>
      </div>
    </section>
    </Fragment>
  )
}

export default Rigestar
