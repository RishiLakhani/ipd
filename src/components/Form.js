import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Form() {
    
    const [ent, setEnt] = useState(0)
    const [soc, setSoc] = useState(0)
    const [gam, setGam] = useState(0)
    const [edu, setEdu] = useState(0)
    const [haf, setHaf] = useState(0)
    const [bam, setBam] = useState(0)
    const [baf, setBaf] = useState(0)
    const [oth, setOth] = useState(0)
    const [tot, setTot] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        setTot(() => parseInt(ent) + parseInt(soc) + parseInt(gam) + parseInt(edu) + parseInt(haf) + parseInt(bam) + parseInt(baf) + parseInt(oth))
        console.log(tot)
    }

    return (
            <form onSubmit={(e) => handleSubmit(e)} >
                <Grid container spacing={7} style={{ padding: '30px 100px' }}>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Entertainment:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setEnt(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Social Media:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setSoc(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Gaming:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setGam(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Education:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setEdu(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Health & Fitness:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setHaf(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Books & Music:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setBam(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Business & Finance:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setBaf(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                        <Typography textAlign="left" >Other apps:</Typography>
                        <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setOth(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'center' }} >
                        <Button variant='contained' type='submit' style={{ maxWidth: '300px', width: '50%', fontSize: '15px', margin: 'auto' }} >Submit</Button>
                    </Grid>
                </Grid>
            </form>
    )
}

export default Form