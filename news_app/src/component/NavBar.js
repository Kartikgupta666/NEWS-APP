import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import maincontext from '../context/maincontext'

export default function NavBar() {
    let location = useLocation();
    let history = useNavigate();
    const { user, getUser } = useContext(maincontext);

    useEffect(() => {
        getUser();
        
        // eslint-disable-next-line
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        history('/')
    }
    // console.log(user)

    //   ***********************************************************
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">N.E.W.S</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/aboutus">About Us</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catagories
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                            {!localStorage.getItem('token') ? (
                                <li className="nav-item">

                                    <Link className={`nav-link ${location.pathname === "/Login" ? "active" : ""}`} to="/Login">Login</Link>

                                </li>) : (
                                <li className="nav-item">

                                    <Link className={`nav-link ${location.pathname === "/Logout" ? "active" : ""}`} onClick={logout} to="/Login">Logout</Link>

                                </li>)}


                            {
                                localStorage.getItem('token') ? <li className="nav-item">
                                    <Link className="nav-link text-capitalize active" to="#" tabIndex="-1" aria-disabled="true"> {user.name} </Link>
                                </li> : <li className="nav-item">
                                    <Link className="nav-link text-capitalize active" to="#" tabIndex="-1" aria-disabled="true"> {"Guest"} </Link>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

