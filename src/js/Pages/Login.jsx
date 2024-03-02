import React, { Fragment } from "react";
import "../../Css/style.css";
const Login = () => {
  return (
    <Fragment>
    <section className="all">
        <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            Login
          </a>
        </form>
      </div>
    </section>
    </Fragment>
  );
};

export default Login;
