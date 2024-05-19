import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';
import { useDispatch } from 'react-redux';
import { actioncreators } from '../state/index'
import { bindActionCreators } from 'redux';

//with out redux the process to pass data from one component to another is impossible so we use redux , redux-thunk , react-redux all packages are must 

export default function Login() {
  const dispatch = useDispatch()
  const { showname } = bindActionCreators(actioncreators, dispatch)


  const history = useNavigate();
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [alert, setAlert] = useState(null)
  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/login", {

        email: email,
        password: Password
      })
        .then(res => {
          if (res.data.email === email && res.data.password === Password) {
            history("/")
            showname(res.data.name)

          }

          else if (res.data.email !== email && res.data.password !== Password) {

            showAlert("Eighter Email or Password is incorrect", "danger");
          }

        })
        .catch(e => {
          showAlert("Wronge Details", 'danger')
          console.log(e);
        })
    }
    catch (e) {
      console.log(e);
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  return (
    <>
      <Alert alert={alert} />
      <form action="POST">

        <div style={{
          "position": "relative",
          "height": "500px",
          "width": "300px",
          "left": "40%",

        }}>
          <div className=" my-5 " >

            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" />
            </div>
            <input className="btn btn-primary" type="submit" onClick={submit} value="Log in" />
            &nbsp;&nbsp;&nbsp;
            <Link className="btn btn-primary" to="/Signup" role="button">Sign up</Link>

          </div>
        </div>
      </form>
    </>
  );
}



