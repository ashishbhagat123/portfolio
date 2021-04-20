import React from "react";
import styles from "./Styles/Landingpage.module.css";
import my_pic from "./Images/my_pic.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { TechStack } from "./TechStack";
import { Projects } from "./Projects";
import GitHub from "./GitHub";
import Profeciency from "./Profeciency";
import ContactUs from "./Contact";

const LandingPage = ({ mode }) => {
    const handleLinkedIn = () => {
        window.location.href =
            "https://www.linkedin.com/in/ashish-bhagat-3b2bb1142/";
    };

    const handleGit = () => {
        window.location.href = "https://github.com/ashishbhagat123";
    };

    const handleResume = () => {
        window.location.href =
            "https://drive.google.com/file/d/1I7sHfYzTTmZsXV9upUlUmSlDAmFUawRJ/view?usp=sharing";
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
                                  "linear-gradient(-45deg,#151515, #6b011f,#126e82, #114e60)",
                          }
                        : {
                              backgroundImage:
                                  "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                          }
                }
            >
                <div className={styles.about}>
                    <h2>Hello, I'M ASHISH BHAGAT</h2>
                    <h1>Full Stack Developer</h1>
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
                            />
                        </div>
                        <div>
                            <FaGithubSquare
                                onClick={handleGit}
                                color="#184d47"
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
            <GitHub mode={mode} />
            <ContactUs mode={mode} />
        </>
    );
};

export { LandingPage };
