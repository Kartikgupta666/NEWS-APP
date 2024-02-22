import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Login extends Component {
  render() {
    return (
      <>
        <div style={{
          "position": "relative",
          "height": "500px",
          "width": "300px",
          "left": "40%",

        }}>
          <div className=" my-5 " >
            <div className="mb-3 ">
              <label for="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter Password" />
            </div>
            <input class="btn btn-primary" type="submit" value="Log in" />
            &nbsp;&nbsp;&nbsp;
            <Link class="btn btn-primary" to="/Signup" role="button">Sign up</Link>

          </div>
        </div>
      </>
    )
  }
}

export default Login
