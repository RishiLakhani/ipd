import React from 'react'
import analy from "../home-hero_pm.svg";
import Typewriter from "typewriter-effect";
import { Grid } from '@mui/material'

function Landing({ handleClick }) {
    return (
        <div>
            <nav className="header">
                <h1 className="logo" onClick={() => handleClick(0)}>AppRehab</h1>
                <ul className="main-nav">
                    <button className="navbutton" onClick={() => handleClick(1)}>Let's Begin</button>
                </ul>
            </nav>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} style={{ padding: "30px 100px" }}>
                    <img src={analy} alt="Analysis" />
                </Grid>
                <Grid item xs={6} style={{ padding: "30px 100px" }}>
                    <div className="typew">
                    <p>
                        The fastest
                        <br />
                        way to
                    </p>
                    <Typewriter
                        options={{
                            strings: ["Analyze", "Inspect"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <p >your ScreenTime</p>
                    </div>
                    <p className="subscript">
                        We’ve analyzed <i>1M datsets of users</i> to create an online
                        analysis tool that analyze your screentime data and indicates
                        whether you are addicted to mobile phones in real time.
                    </p>
                    <br />
                    <button className="button_animated" onClick={() => handleClick(1)}>
                        <span className="button-text">LET THE ANALYSIS BEGIN</span>
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Landing