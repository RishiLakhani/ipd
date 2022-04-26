import React from 'react'
import { Scatter } from "react-chartjs-2";
import { Grid, Typography } from '@mui/material'
import { Chart as ch, registerables } from 'chart.js';
ch.register(...registerables);


function Chart(props) {
    const { val, val0, val1, val2, tot, sub, ent, soc, gam } = props

    return (
        <Grid container spacing={7} style={{ padding: '30px 100px' }}>
            <Grid item xs={6}>
                <Typography>Unproductive - Productive</Typography>
                <Scatter
                    id='total'
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val,
                            backgroundColor: 'rgb(255, 99, 132)',
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: sub
                            }],
                            backgroundColor: 'rgb(0, 0, 0)'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom'
                            }
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography>Entertainment</Typography>
                <Scatter
                    id='ent'
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val0,
                            backgroundColor: 'rgb(255, 99, 132)',
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: ent
                            }],
                            backgroundColor: 'rgb(0, 0, 0)'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom'
                            }
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography>Social Media</Typography>
                <Scatter
                    id='soc'
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val1,
                            backgroundColor: 'rgb(255, 99, 132)',
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: soc
                            }],
                            backgroundColor: 'rgb(0, 0, 0)'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom'
                            }
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography>Gaming</Typography>
                <Scatter
                    id='gam'
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val2,
                            backgroundColor: 'rgb(255, 99, 132)',
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: gam
                            }],
                            backgroundColor: 'rgb(0, 0, 0)'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom'
                            }
                        }
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Chart