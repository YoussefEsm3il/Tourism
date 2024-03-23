import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const LoginUser = () => {
  return (
    <Fragment>
      <div className="col-12">
        <section className="all">
          <div className="login-box">
            <h2>Login User</h2>
            <form 
              method="post" 
              action="../Components/Home.jsx">
              <div className="user-box">
                <input type="text" name required />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name required />
                <label>Password</label>
              </div>
              <Link href="#">
                <span />
                <span />
                <span />
                <span />
                Login
              </Link>
              <Link href='#' to={'/user/register'}>
                register
              </Link>
            </form>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default LoginUser
