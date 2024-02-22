import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
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
                        <label for="name" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter UserName" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Confirm Password" />
                    </div>
                    <input class="btn btn-primary" type="submit" value="Create Account" />

                </div>
            </div>
        )
    }
}

export default Signup
