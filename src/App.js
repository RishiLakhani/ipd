import React, { useEffect } from 'react'
import { Scatter } from "react-chartjs-2";
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Chart as ch, registerables } from 'chart.js';
ch.register(...registerables);

function App() {
  const [ent, setEnt] = React.useState(0)
  const [soc, setSoc] = React.useState(0)
  const [gam, setGam] = React.useState(0)
  const [edu, setEdu] = React.useState(0)
  const [haf, setHaf] = React.useState(0)
  const [bam, setBam] = React.useState(0)
  const [baf, setBaf] = React.useState(0)
  const [oth, setOth] = React.useState(0)
  const [tot, setTot] = React.useState(0)
  const [sub, setSub] = React.useState(0)
  const [val, setVal] = React.useState([])
  const [val0, setVal0] = React.useState([])
  const [val1, setVal1] = React.useState([])
  const [val2, setVal2] = React.useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTot(() => ent + soc + gam + edu + haf + bam + baf + oth)
    setSub(() => ent + soc + gam - edu - haf - bam - baf)
    console.log(tot)
  }
  // 0.2934828479821102 0.10641739637440618
  // 0.24720565541730846 0.008430595347393668
  // 0.3292769175630243 0.012928603779648079
  // 0.014922801740579621 0.009833021051867244

  React.useEffect(() => {
    const process = async () => {
      let y, y0, y1, y2;
      let temp = [];
      let temp0 = [];
      let temp1 = [];
      let temp2 = [];
      for (let x = 0; x <= 800; x += 800) {
        y = (0.2934828479821102 * x) + 0.10641739637440618;
        y0 = (0.24720565541730846 * x) + 0.008430595347393668;
        y1 = (0.3292769175630243 * x) + 0.012928603779648079;
        y2 = (0.014922801740579621 * x) + 0.009833021051867244;
        temp.push({ x, y })
        temp0.push({ x, y0 })
        temp1.push({ x, y1 })
        temp2.push({ x, y2 })
      }
      setVal(temp)
      setVal0(temp0)
      setVal1(temp1)
      setVal2(temp2)
    }
    process()
  }, [])

  useEffect(() => {
    console.log(val)
    console.log(val0)
    console.log(val1)
    console.log(val2)
  }, [val, val0, val1, val2])

  return (
    <div>
      <Typography variant="h4" textAlign='center' >CHECK HERE IF YOU ARE ADDICTED TO ANY APPS!</Typography>
      <form onSubmit={(e) => handleSubmit(e)} >
        <Grid container spacing={7} style={{ padding: '30px 100px' }}>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Entertainment:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setEnt(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Social Media:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setSoc(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Gaming:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setGam(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Education:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setEdu(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Health & Fitness:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setHaf(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Books & Music:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setBam(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Business & Finance:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setBaf(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
            <Typography textAlign="left" >Other apps:</Typography>
            <TextField required variant='outlined' placeholder='Time in mins' onChange={(e) => setOth(parseInt(e.target.value))} />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }} >
            <Button variant='contained' type='submit' style={{ maxWidth: '300px', width: '50%', fontSize: '15px', margin: 'auto' }} >Submit</Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={7} style={{ padding: '30px 100px' }}>
        <Grid item xs={6}>
          <Typography>Unproductive - Productive</Typography>
          <Scatter
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
    </div>
  );
}

export default App;
