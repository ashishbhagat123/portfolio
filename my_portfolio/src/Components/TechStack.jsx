import React from "react";
import styles from "./Styles/TechStack.module.css";
import css from "./Images/css.svg";
import react from "./Images/react.svg";
import javascript from "./Images/javascript.svg";
import github from "./Images/github.svg";
import mongo from "./Images/mongodb.svg";
import material from "./Images/material-ui.svg";
import nodejs from "./Images/nodejs.svg";

const TechStack = ({ mode }) => {
    return (
        <>
            <div
                id = "tech-stack"
                style={
                    mode === "dark"
                        ? {
                              background:
                                  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                              color: "white",
                          }
                        : { background: "white", color: "black" }
                }
            >
                <h1 className = {styles.mobile} style = {{fontSize: "60px"}}>Tech Stack</h1>
                <div className={styles.flex}>
                    <div>
                        <img
                            src="https://cdn.svgporn.com/logos/html-5.svg"
                            alt="html"
                        />
                        <p>HTML</p>
                    </div>
                    <div>
                        <img src={css} alt="css" />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={javascript} alt="Javascript" />
                        <p>Javascript</p>
                    </div>
                    <div>
                        <img src={react} alt="React" />
                        <p>React</p>
                    </div>
                    <div>
                        <img src={material} alt="Material" />
                        <p>Material-ui</p>
                    </div>
                    <div>
                        <img src={nodejs} alt="node" />
                        <p>Node Js</p>
                    </div>
                    <div>
                        <img src={mongo} alt="mongo db" />
                        <p>Mongo db</p>
                    </div>
                    <div>
                        <img src={github} alt="Github" />
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export { TechStack };
