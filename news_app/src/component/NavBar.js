import React  from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios';
// import {useEffect , useState} from react

export default function NavBar() {

    // show the name of user on the navbar {pending}
//     const [Uname, setUname] = useState("guest");

//   useEffect(() => {
//     // MongoDB se user object retrieve karne ka API endpoint
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get('http://localhost:8000/login');
//         setUname(res.data);
//         console.log(res.data) // MongoDB se retrieve kiya gaya user object ko state me store karenge
//       } catch (error) {
//         console.error('Error occurred while fetching user:', error);
//       }
//     };

//     fetchUser();
//   }, []);

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
                            <li className="nav-item">
                                <Link className="nav-link " to="/login">Login</Link>
                            </li>

                        </ul>
                        {/* <div className="nav-item">
                            <Link className="nav-link fs-5" style={{ "color": "white" }} to="/">{Uname} </Link>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

