import React, { useState } from "react";
import styles from "./Styles/Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsSun } from "react-icons/bs";
import { IoIosCloudyNight } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = ({ mode, handleClick }) => {
    const [menu, setMenu] = useState(false);
    const [show, setShow] = useState(window.scrollY);

    window.addEventListener("scroll", () => {
        setShow(window.scrollY);
    });

    const handleMenu = () => {
        setMenu(menu ? false : true);
    };

    return (
        <>
            <div
                className={styles.bar}
                style={
                    mode === "dark"
                        ? show === 0
                            ? { background: "transparent", color: "white" }
                            : { background: "black", color: "white" }
                        : show === 0
                        ? { background: "transparent", color: "black" }
                        : { background: "#00303f", color: "white" }
                }
                onClick={handleMenu}
            >
                <FaBars color="white" />
            </div>
            <div
                className={menu ? styles.visible : styles.main}
                style={
                    mode === "dark"
                        ? show === 0
                        ? { background: "transparent", color: "white" }
                        : { background: "black", color: "white" }
                        : show === 0
                        ? { background: "transparent", color: "black" }
                        : { background: "#00303f", color: "white" }
                }
            >
                <div>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                    >
                        HOME
                    </Link>
                </div>
                <div>
                    <Link
                        activeClass="active"
                        to="tech-stack"
                        spy={true}
                        smooth={true}
                    >
                        TECH STACK
                    </Link>
                </div>
                <div>
                    <Link
                        activeClass="active"
                        to="proficiency"
                        spy={true}
                        smooth={true}
                    >
                        PROFIENCY
                    </Link>
                </div>
                <div>
                    <Link
                        activeClass= {styles.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                    >
                        PROJECTS
                    </Link>
                </div>
                <div>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                    >
                        CONTACT
                    </Link>
                </div>
                <div className={styles.mode} onClick={handleClick}>
                    {mode === "dark" ? (
                        <BsSun color="yellow" size="25px" />
                    ) : (
                        <IoIosCloudyNight size="25px" />
                    )}
                </div>
                <div onClick={handleMenu} className={styles.cross}>
                    <ImCross />
                </div>
            </div>
        </>
    );
};

export { Navbar };
