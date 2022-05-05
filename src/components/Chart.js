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
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val,
                            backgroundColor: "#0bda8f",
                            borderColor: "#0bda8f",
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: sub
                            }],
                            backgroundColor: '#4630eb'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom',
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Total Screen Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            },
                            y: {
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Unprod-Prod Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#7F7F7F'
                                }
                            }
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography>Entertainment</Typography>
                <Scatter
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val0,
                            backgroundColor: "#0bda8f",
                            borderColor: "#0bda8f",
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: ent
                            }],
                            backgroundColor: '#4630eb'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom',
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Total Screen Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            },
                            y: {
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Entertainment Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#7F7F7F'
                                }
                            }
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography>Social Media</Typography>
                <Scatter
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val1,
                            backgroundColor: "#0bda8f",
                            borderColor: "#0bda8f",
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: soc
                            }],
                            backgroundColor: '#4630eb'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom',
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Total Screen Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            },
                            y: {
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Social Media Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#7F7F7F'
                                }
                            }
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography>Gaming</Typography>
                <Scatter
                    data={{
                        datasets: [{
                            label: 'Expected',
                            data: val2,
                            backgroundColor: "#0bda8f",
                            borderColor: "#0bda8f",
                            tension: 0,
                            showLine: true
                        }, {
                            label: 'User',
                            data: [{
                                x: tot,
                                y: gam
                            }],
                            backgroundColor: '#4630eb'
                        }]
                    }}
                    options={{
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom',
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Total Screen Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            },
                            y: {
                                title: {
                                    display: 'true',
                                    color: '#7F7F7F',
                                    text: 'Gaming Time'
                                },
                                grid: {
                                    color: '#7F7F7F'
                                },
                                ticks: {
                                    color: '#7F7F7F'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#7F7F7F'
                                }
                            }
                        }
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Chart