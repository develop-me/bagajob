import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>HOME</div>
            <Link to="/home/login">Login</Link>
        </>
    );
};

export default Home;