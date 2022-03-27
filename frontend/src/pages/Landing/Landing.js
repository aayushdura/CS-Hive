import React from 'react'
import "./landing.scss"
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router';
const Landing = () => {
    const navigate = useNavigate()
    const styleButton = {
        backgroundColor: "black ",
        width: "50%",
        color: "white"
    }
    return (
        <div className='landing-container'>
            <h2>Hey There Welcome To Collaborative-Forum</h2>
            <section className="button-wrapper">
                <Button style={styleButton} onClick={(e) => { navigate("/login") }}>LogIn</Button>
                <Button style={styleButton} onClick={(e) => { navigate("/register") }}>Register</Button>
            </section>

        </div>
    )
}

export default Landing