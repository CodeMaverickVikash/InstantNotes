import React, {useEffect} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

export default function Navbar() {
    // useLocation hook
    let location = useLocation();

    // useEffect hook
    useEffect(() => { // useEffect always expect a function
        // console.log(location.pathname);
      }, [location]); // Only re-run the effect if location changes

    // useHistory hook
    let history = useHistory();

    // Function
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link $(location.pathname === "/about" ? "active" : "")`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link $(location.pathname === "/about" ? "active" : "")`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link $(location.pathname === "/about" ? "active" : "")`} to="/contact">Contact us</Link>
                        </li>
                    </ul>

                    {/* if-else condition */}
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className ="btn btn-outline-success" type ="submit">Search</button>
                        <Link className ="btn btn-primary mx-3" to="/login">Login</Link>
                        <Link className ="btn btn-primary" to="/signup">Signup</Link>
                    </form> : <button className ="btn btn-primary" onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </nav>
    )
}
