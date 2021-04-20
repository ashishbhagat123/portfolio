import React from "react";
import styles from "./Styles/Contact.module.css";
import emailjs from "emailjs-com";

// import './ContactUs.css';

const ContactUs = ({ mode}) => {
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
                            <h1>Contact Me</h1>
                            <div>
                                <p>Name</p>
                                <input
                                    placeholder="name"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div>
                                <p>Email</p>
                                <input
                                    placeholder="email"
                                    type="email"
                                    name="email"
                                />
                            </div>
                        </div>

                        <p>Message</p>
                        <textarea name="message" />
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
                        <h2>Address</h2>
                        <p>Verdant appartments, Bangalore</p>
                    </div>
                    <div>
                        <h2>Phone</h2>
                        <p>7204183942</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
