import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Alert from './Alert'
export default function Signup() {
    const history = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(null)

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/Signup", {

                name: name,
                email: email,
                password: password
            })
                .then(res => {
                    if (res.data === "exist") {
                       showAlert("user already exist", "success");
                        
                    }
                    else if (res.data !== "exist") {
                        
                        history("/")
                        console.log(name)
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e)
        }

    }
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            types: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }


    return (
        <>
            <Alert alert={alert} />
            <div style={{
                "position": "relative",
                "height": "500px",
                "width": "300px",
                "left": "40%",

            }}>
                <div className=" my-5 " >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">UserName</label>
                        <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} id="name" placeholder="Enter UserName" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="Enter Password" />
                    </div>
                    <input className="btn btn-primary" type="submit" onClick={submit} value="Create Account" />
                    <p>
                        have an account? <Link to="/login">Login</Link>
                    </p>


                </div>
            </div>
        </>
    )
}
