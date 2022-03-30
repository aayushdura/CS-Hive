import React from 'react'
import "./landing.scss"
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router';
const Landing = () => {
    const navigate = useNavigate()
    const styleButton = {
        backgroundColor: "#293035",
        width: "2in",
        fontSize: "20px",
        color: "#bec7ce",
        padding: "5px"
    }
    return (
        <div className='landing-container'>
            <h2>Welcome To Collaborative-Forum</h2>
            <h3>Where value Your Preferences</h3>
            <p className='intro-text'>
                . . . with<b> -- Collborative-Filtering --</b> behind the scene
            </p>
            <p className='intro-text'>
                Let's get started . . .

            </p>
            <section className="button-wrapper">
                <Button style={styleButton} onClick={(e) => { navigate("/login") }}>LogIn</Button>
                <Button style={styleButton} onClick={(e) => { navigate("/register") }}>Register</Button>
            </section>

        </div>
    )
}

export default Landing