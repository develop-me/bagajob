import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Nav = () => {
    const { name } = useSelector(state => state) 
    const initials = name.split(" ").map((n)=>n[0]).join("").toUpperCase()
    const access_token = useSelector(state => state.user.access_token)
    return (
        <>
        <nav className="navbar">
            <Link to="/home/">
                <h1 className="navbar-brand">bagajob</h1>
            </Link>

        { access_token ?
        <>   
            <div className="dropdown">
                <button className="dropbtn">
                    { initials }
                </button>
                <div className="dropdown-content">
                <Link to="/mainpage"><a href="#">My Applications</a></Link>
                <Link to="/account"> <a href="#">My Account</a></Link>
                <Link to="/home/logout"> <a href="#">Logout</a></Link>
                </div>
            </div>
            </>
        :
        null }
        </nav>

        </>
    );
};

export default Nav;