import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", width="30rem" }}>
            <h1>Bagajob</h1>
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div id="myDropdown" class="dropdown-content">
                    <Link to="" href="#">My Applications</Link>
                    <Link to="account" href="#">My Account</Link>
                    <button to="" href="#">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header