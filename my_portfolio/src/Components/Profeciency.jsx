import React from "react";
import styles from "./Styles/Profeciency.module.css";
import front_end from "./Images/frontend.png";
import back_end from "./Images/backend.png";
import data from "./Images/data.png";



const Profeciency = () => {
      

    return (
        <div>
            <h1
                id="proficiency"
                className={styles.mobile}
                style={{ fontSize: "60px"}}
            >
                My Proficiency
            </h1>
            <div 
            className={styles.container}>
                <div>
                    <img src={front_end} alt="frontEnd" />
                    <h4>Front End</h4>
                    <p>React, Javascript</p>
                </div>
                <div>
                    <img src={back_end} alt="back_end" />
                    <h4>Back End</h4>
                    <p>Node JS, Express, MongoDB</p>
                </div>
                <div>
                    <img src={data} alt="data" />
                    <h4>Data Structures</h4>
                    <p>Stacks, Arrays, Queues.</p>
                </div>
            </div>
        </div>
    );
};

export default Profeciency;
