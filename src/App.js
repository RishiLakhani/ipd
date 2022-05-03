import React from 'react'
import "./App.css";
import Form from './components/Form'
import Chart from './components/Chart'
import Output from './components/Output'
import { Typography } from '@mui/material'
import Landing from './components/Landing';

function App() {
  const [submit, setSubmit] = React.useState(0)
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
  const [out, setOut] = React.useState([])


  const lines = () => {
    let y;
    let temp = [];
    let temp0 = [];
    let temp1 = [];
    let temp2 = [];
    for (let x = 0; x <= tot; x += tot) {
      y = (0.2934828479821102 * x) + 0.10641739637440618;
      temp.push({ x, y })
      y = (0.24720565541730846 * x) + 0.008430595347393668;
      temp0.push({ x, y })
      y = (0.3292769175630243 * x) + 0.012928603779648079;
      temp1.push({ x, y })
      y = (0.014922801740579621 * x) + 0.009833021051867244;
      temp2.push({ x, y })
    }
    setVal(temp)
    setVal0(temp0)
    setVal1(temp1)
    setVal2(temp2)
  }

  const output = () => {
    if (ent > ((0.24720565541730846 * tot) + 0.008430595347393668)) {
      setOut((prev) => [...prev, "Entertainment"])
    }
    if (soc > ((0.3292769175630243 * tot) + 0.012928603779648079)) {
      setOut((prev) => [...prev, "Social Media"])
    }
    if (gam > ((0.014922801740579621 * tot) + 0.009833021051867244)) {
      setOut((prev) => [...prev, "Gaming"])
    }
  }

  const handleCalc = () => {
    setTot(() => ent + soc + gam + edu + haf + bam + baf + oth)
    setSub(() => ent + soc + gam - edu - haf - bam - baf)
  }

  React.useEffect(() => {
    if (tot !== 0 && sub !== 0) {
      lines()
      output()
      setSubmit(2)
    }
  }, [tot, sub])

  return (
    <div>
      {submit === 0 &&
        <Landing handleClick={setSubmit} />
      }
      {submit === 1 &&
        <>
          <nav className="header">
            <h1 className="logo" onClick={() => setSubmit(0)}>AppRehab</h1>
          </nav>
          <br />
          <Form setEnt={setEnt} setSoc={setSoc} setGam={setGam} setEdu={setEdu} setHaf={setHaf} setBam={setBam} setBaf={setBaf} setOth={setOth} handleCalc={handleCalc} />
        </>
      }
      {submit === 2 &&
        <>
          <nav className="header">
            <h1 className="logo" onClick={() => setSubmit(0)}>AppRehab</h1>
          </nav>
          <br />
          <Typography
            variant="inherit"
            textAlign="center"
            style={{ fontWeight: 700, fontSize: 40 }}
          >
            Results of the Analysis
          </Typography>
          <Chart val={val} val0={val0} val1={val1} val2={val2} tot={tot} sub={sub} ent={ent} soc={soc} gam={gam} />
          <Output out={out} />
        </>
      }
    </div>
  )
}

export default App;
