import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function Form(props) {
    const { setEnt, setSoc, setGam, setEdu, setHaf, setBam, setBaf, setOth, handleCalc } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCalc()
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <Typography
                variant="inherit"
                textAlign="center"
                style={{ fontWeight: 700, fontSize: 40 }}
            >
                CHECK HERE IF YOU ARE ADDICTED TO ANY APPS!
            </Typography>
            <br />
            <br />
            <Grid container spacing={7} style={{ padding: '30px 100px' }}>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Entertainment:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setEnt(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Social Media:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setSoc(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Gaming:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setGam(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Education:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setEdu(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Health & Fitness:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setHaf(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Books & Music:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setBam(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Business & Finance:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setBaf(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <Typography textAlign="left" >Other apps:</Typography>
                    <TextField required variant='outlined' placeholder='Time in mins' style={{ background: "white", borderRadius: "4px" }} onChange={(e) => setOth(parseInt(e.target.value))} />
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                    <button className="button_animated" type="submit">
                        <span className="button-text">SUBMIT</span>
                    </button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Form