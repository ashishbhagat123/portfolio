import React from "react";
import styles from "./Styles/Contact.module.css";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const ContactUs = ({ mode}) => {

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/ashish-bhagat-3b2bb1142/")
            
    };

    const handleGit = () => {
        window.open("https://github.com/ashishbhagat123")
    };

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1I7sHfYzTTmZsXV9upUlUmSlDAmFUawRJ/view?usp=sharing")
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_2k5bl3k",
                "template_9lan0gb",
                e.target,
                "user_CoSCMsVmBRfutO4ZNd06j"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            e.target.reset()
    };

    return (
        <div
            id= "contact"
            className={styles.main}
            style={
                mode === "dark"
                    ? { background: "black", color: "white" }
                    : { background: "#00303f", color: "white" }
            }
        >
            <div className={styles.container}>
                <div className={styles.mail}>
                    <form className={styles.contact_form} onSubmit={sendEmail}>
                        <div>
                            <h1>Get In Touch</h1>
                            <div>
                                <p>Name</p>
                                <input
                                    placeholder="name"
                                    type="text"
                                    name="name"
                                    autoComplete = "off"
                                />
                            </div>
                            <div>
                                <p>Email</p>
                                <input
                                    placeholder="email"
                                    type="email"
                                    name="email"
                                    autoComplete = "off"
                                />
                            </div>
                        </div>

                        <p>Message</p>
                        <textarea name="message" autoComplete = "off"/>
                        <input
                            className={styles.submit}
                            type="submit"
                            value="Send"
                        />
                    </form>
                </div>
                <div className={styles.contact}>
                    <h1>Ashish Bhagat</h1>
                    <div>
                        <p>Bangalore, India</p>
                        <p>+7204183942</p>
                        <p>abhagat629@gmail.com</p>
                    </div>
                    <div className = {styles.flex}>
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
            </div>
        </div>
    );
};

export default ContactUs;
