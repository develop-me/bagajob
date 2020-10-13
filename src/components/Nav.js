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

        { access_token && name !== "" ?
        <>   
            <div className="dropdown">
                <button className="dropbtn">
                    { initials }
                </button>
                <div className="dropdown-content">
                <Link to="/mainpage"><p href="#">My Applications</p><img className="nav-icon filter-white" src={ require('../assets/images/clipboard.svg') } alt="applications icon"></img></Link>
                <Link to="/account"> <p href="#">My Account</p><img className="nav-icon filter-white" src={ require('../assets/images/person_icon.svg') } alt="account icon"></img></Link>
                <Link to="/home/logout"> <p href="#">Logout</p><img className="nav-icon filter-white" src={ require('../assets/images/logout.svg') } alt="applications icon"></img></Link>
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