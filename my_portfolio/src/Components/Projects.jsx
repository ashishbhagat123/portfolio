import React, { useEffect} from "react";
import styles from "./Styles/Projects.module.css";
import css from "./Images/css.svg";
import react from "./Images/react.svg";
import javascript from "./Images/javascript.svg";
import material from "./Images/material-ui.svg";
import hindu from "./Images/hindu.png";
import looseIt from "./Images/looseIt.jpeg";
import buffer from "./Images/buffer.png";
import html from "./Images/html.svg";



const project = [
    {
        title: "The Hindu clone",
        about: "Web app where user can read news from politics, sports and other sections.",
        demo: "https://the-hindu-1w79mgmmr-ashishbhagat123.vercel.app/",
        git: "https://github.com/Rakesh-Thampy/buffer_project",
        img: hindu,
        tech: [html, css, react, material],
    },
    {
        title: "Loose It clone",
        about: "Web app used to keep a track of calorie count and helps user to loose weight.",
        demo: "https://looseit.netlify.app",
        git: "https://github.com/lokeshnimje/Silicon",
        img: looseIt,
        tech: [html, css, javascript],
    },
    {
        title: "Buffer.com clone",
        about: "A simple responsive static website.",
        demo: "https://bufferclone.netlify.app",
        git: "https://github.com/Rakesh-Thampy/buffer_project",
        img: buffer,
        tech: [html, css, javascript],
    },
];

const Projects = ({ mode }) => {

    const handleGit = (e) => {
        window.open(e)
    }

    const handleDrive = (e) => {
        window.open(e)
    }

    return (
        <div id="projects"
        >
            <h1 className = {styles.mobile} style = {{fontSize: "60px"}}>My Projects</h1>
            <div className={styles.container}>
                {project.map((e) => (
                    <>
                        <div className={styles.card}>
                            <div>
                                <img
                                    className={styles.image}
                                    src={e.img}
                                    alt="project"
                                />
                            </div>
                            <div className={styles.buttons}>
                                <button onClick = {() => handleGit(e.git)}>GitHub</button>
                                <button onClick = {() => handleDrive(e.demo)}>Demo</button>
                            </div>
                            <div
                                className={styles.bottom_div}
                                style={
                                    mode === "dark"
                                        ? {
                                              backgroundImage:
                                                  "linear-gradient(to right, #8e0e00, #1f1c18)",
                                          }
                                        : {
                                              background:
                                                  "#00303f",
                                              color: "white",
                                          }
                                }
                            >
                                <h1>{e.title}</h1>
                                <div>
                                    <p>{e.about}</p>
                                    <h3 className = {styles.tech_stack}>Tech Stack: </h3>
                                    <div className={styles.tech}>
                                        {e.tech.map((image) => (
                                            <>
                                                <img src={image} alt={image} />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export { Projects };
