import React, { useEffect } from 'react'
import styles from "./Styles/GitHub.module.css"
import dark from "./Images/dark_git.png"
import light from "./Images/light_git.png"
import aos from "aos"
import "aos/dist/aos.css"
    
const GitHub = ({mode}) => {

    useEffect(() => {
        aos.init({duration:1600})
      }, []);

    

    return (
        <div data-aos = "fade-in">
        <h1 className = {styles.mobile} style = {{fontSize: "60px"}}>My GitHub</h1>
            <div className = {styles.container}>
                <img src= {mode === "dark"? dark: light} alt="github"/>
            </div>
        </div>
    )
}

export default GitHub
