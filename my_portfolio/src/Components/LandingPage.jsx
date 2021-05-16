import React from "react";
import styles from "./Styles/Landingpage.module.css";
import my_pic from "./Images/my_pic.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { TechStack } from "./TechStack";
import { Projects } from "./Projects";
import Profeciency from "./Profeciency";
import ContactUs from "./Contact";
import Roll from 'react-reveal/Roll';

const LandingPage = ({ mode }) => {
    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/ashish-bhagat-3b2bb1142/")
            
    };

    const handleGit = () => {
        window.open("https://github.com/ashishbhagat123")
    };

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1_yPdG8D3V1r38BrYtTcvahyCbyrwzclr/view?usp=sharing")
    };

    return (
        <>
            <div
                id="home"
                className={styles.container}
                style={
                    mode === "dark"
                        ? {
                              backgroundImage:
                                  "linear-gradient(-45deg,#151515, #222831,#0f0f0f, #114e60)",
                          }
                        : {
                              backgroundImage:
                                  "linear-gradient(-45deg, #00adb5, #29bb89, #1cc5dc, #2978b5)",
                          }
                }
            >
                <div className={styles.about}>
                    <h2>
                   
                        Hello, I'M 
                        <span style = {{color: "#046582"}}>
                        <Roll left cascade>
                        
                        ASHISH BHAGAT
                    </Roll>
                    </span>
                    </h2>
                    <h1>
                    <Roll right cascade>
                        Full Stack Developer
                    </Roll>
                        </h1>
                    <p>
                        A passionate aspiring Full Stack Developer skilled in
                        MERN stack, moulded and shaped by Masai School's
                        numerous training. Actively ready to join in a great
                        lively team of a good start-up to adapt me in any
                        situation and environment with ease and perform the
                        best.
                    </p>
                    <div>
                        <div>
                            <FaLinkedin
                                onClick={handleLinkedIn}
                                color="#2867B2"
                                cursor = "Pointer"
                            />
                        </div>
                        <div>
                            <FaGithubSquare
                                onClick={handleGit}
                                color="#184d47"
                                cursor = "Pointer"
                            />
                        </div>
                        <button onClick={handleResume}>Resume</button>
                    </div>
                </div>
                <div className={styles.my_pic}>
                    <div>
                        <img src={my_pic} alt="my_pic" />
                    </div>
                </div>
            </div>
            <TechStack mode={mode} />
            <Profeciency mode={mode} />
            <Projects mode={mode} />
            <ContactUs mode={mode} />
        </>
    );
};

export { LandingPage };
