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
import aos from "aos"
import "aos/dist/aos.css"



const project = [
    {
        title: "The Hindu clone",
        about: "something about project",
        git: "https://github.com/Jammy12345/Team-Butane-THE-HINDU",
        img: hindu,
        tech: [html, css, react, material],
    },
    {
        title: "Loose It clone",
        about: "something about project",
        git: "https://github.com/lokeshnimje/Silicon",
        img: looseIt,
        tech: [html, css, javascript],
    },
    {
        title: "Buffer.com clone",
        about: "something about project",
        git: "https://github.com/Rakesh-Thampy/buffer_project",
        img: buffer,
        tech: [html, css, javascript],
    },
];

const Projects = ({ mode }) => {


        useEffect(() => {
          aos.init({duration:2000})
        }, []);

    const handleGit = (e) => {
        window.location.href = e
    }

    const handleDrive = () => {

    }

    return (
        <div id="projects"
        data-aos = "fade-in"
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
                                <button>Demo</button>
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
                                    <h3>Tech Stack: </h3>
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
