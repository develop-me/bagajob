import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';

import background from "../assets/images/backgroundIcons.svg";
import papers from "../assets/images/papers.svg";
import calendar from "../assets/images/calendar.svg";
import contact from "../assets/images/contact.svg";
import mobile from "../assets/images/mobile.svg";

const Home = () => {
    return (
        <>
            <header className="home-background-container">

                <div style={{ backgroundSize: 'fill', backgroundImage: `url(${background})` }}>
                    <div className="home-top-links">
                        <Link to="/home/signup">
                            <button className="quaternarybtn home-top-signup" type="submit" id="">
                                SIGN UP
                    </button>
                        </Link>
                        <Link to="/home/login">
                            <button className="quaternarybtn home-top-login" type="submit" id="">
                                LOG IN
                    </button>
                        </Link>

                    </div>

                    <Link to="/home/">
                        <h1 className="brand-title center">Bagajob<span className="highlight-text">.</span></h1>
                    </Link>

                    <h3 className="center h3-alternate">
                        Track job applications from start to finish<span className="highlight-text">.</span>
                    </h3>
                </div>

            </header>

            <main className="home-body-container">
                <section className="home-info-holders">

                    <div className="home-info-div ">
                        <div className="home-info-icon" style={{ backgroundImage: `url(${papers})` }}></div>
                        <h4>All your job applications in one place</h4>
                        <p className="para-info">Keep track of all the jobs you want to apply for</p>
                    </div>

                    <div className="home-info-div ">
                        <div className="home-info-icon" style={{ backgroundImage: `url(${calendar})` }}></div>
                        <h4>Keep important dates to hand</h4>
                        <p className="para-info">Never almost miss an interview again</p>
                    </div>

                    <div className="home-info-div ">
                        <div className="home-info-icon" style={{ backgroundImage: `url(${contact})` }}></div>
                        <h4>Know exactly who to contact</h4>
                        <p className="para-info">Keep a record of key contacts, and how to get in touch with them</p>
                    </div>

                    <div className="home-info-div ">
                        <div className="home-info-icon" style={{ backgroundImage: `url(${mobile})` }}></div>
                        <h4>Store all your paperwork together</h4>
                        <p className="para-info">Keep your CVs and cover letters to hand at all times</p>
                    </div>

                </section>

                <section>
                    <h4 className="home-signup-div">Get the full set of tools for free <br />(yes really) by signing up below.</h4>

                    <div className="button-container">
                        <Link to="/home/signup">
                            <button className="secondarybtn signup-btn-home" type="submit" id="">
                                SIGN UP
                    </button>
                        </Link>
                        <Link to="/home/login">
                            <button className="primarybtn login-btn-home" type="submit" id="">
                                LOG IN
                    </button>
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="home-footer">
                <h3 className="footer-text">© 2021</h3>
            </footer>

        </>
    );
};

export default Home;