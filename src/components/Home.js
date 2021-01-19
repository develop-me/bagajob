import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import background from "../assets/images/backgroundIcons.svg";

const Home = () => {
    return (
        <>
            <header className="home-background-container">
                <div style={{ backgroundImage: `url(${background})` }}>
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
                        <h1 className="updated-title center">Bagajob<span className="highlight-text">.</span></h1>
                    </Link>

                    <h3 className="center">
                        Track job applications from start to finish<span className="highlight-text">.</span>
                    </h3>
                </div>

            </header>

            <main className="home-body-container">
                <section className="home-info-holders">

                    <div className="home-info-div home-info-primary">
                        <h4>All your job applications in one place</h4>
                        <p className="para-info">Keep track of all the jobs you want to apply for</p>
                    </div>

                    <div className="home-info-div home-info-secondary">
                        <h4>Keep important dates to hand</h4>
                        <p className="para-info">Never almost miss an interview again</p>
                    </div>

                    <div className="home-info-div home-info-secondary">
                        <h4>Know exactly who to contact</h4>
                        <p className="para-info">Keep a record of key contacts, and how to get in touch with them</p>
                    </div>

                    <div className="home-info-div home-info-primary">
                        <h4>Store all your paperwork together</h4>
                        <p className="para-info">Keep your CVs and cover letters to hand at all times</p>
                    </div>

                </section>
            </main>

            <footer>

            </footer>

            <Link to="/home/">
                <h1 className="brand-title center">bagajob</h1>
            </Link>
            <h3 className="brand-text center">
                Track job applications from start to finish
            </h3>
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
            <div className="home-info-container">
                <div className="home-image-container home-image-first">
                    <img className="home-image" src={require('../assets/images/add-task-24px.svg')} alt="A simple icon image indicating task management"></img>
                </div>
                <div className="home-text-container home-text-first">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                </div>
                <div className="home-image-container home-image-second">
                    <img className="home-image" src={require('../assets/images/timeline-24px.svg')} alt="A simple icon image indicating task management"></img>
                </div>
                <div className="home-text-container home-text-second">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="home-image-container home-image-third">
                    <img className="home-image" src={require('../assets/images/work-24px.svg')} alt="A simple icon image indicating task management"></img>
                </div>
                <div className="home-text-container home-text-third">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </>
    );
};

export default Home;