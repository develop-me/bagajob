import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1 className="brand-title">bagajob</h1>
            <h3 className="brand-text">
                Track job applications from start to finish
            </h3>
            <div className="button-container">
                <Link to="/home/login">
                    <button className="primarybtn login-btn-home" type="submit" id="">
                        LOG IN
                    </button>
                    </Link>
                <Link to="/home/signup">
                    <button className="secondarybtn signup-btn-home" type="submit" id="">
                        SIGN UP
                    </button>  
                </Link>
            </div>
        </>
    );
};

export default Home;