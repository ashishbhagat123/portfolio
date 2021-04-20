import React from 'react'
import styles from "./Styles/GitHub.module.css"
import dark from "./Images/dark_git.png"
import light from "./Images/light_git.png"

const GitHub = ({mode}) => {

    return (
        <>
        <h1 className = {styles.mobile} style = {{fontSize: "60px"}}>GitHub</h1>
            <div className = {styles.container}>
                <img src= {mode === "dark"? dark: light} alt="github"/>
            </div>
        </>
    )
}

export default GitHub
