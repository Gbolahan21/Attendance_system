import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


function Nav() {

    return (
        <nav>
            <Link to="/">
                <img src="hct.jpg" alt="" className="hct"/>
            </Link>
            <h3>Highland College of Technology</h3>
            <ul className="nav-links">
                <Link className="newStyle" to="/">
                    <li>Home</li>
                </Link>
                <Link className="newStyle" to="/Lecturer">
                    <li>Lecturer Registration</li>
                </Link>
                <Link className="newStyle" to="/Login">
                    <li>Lecturer Login</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;