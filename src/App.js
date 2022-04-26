import { Typography } from "@mui/material";
import Chart from "./components/Chart";
import Form from "./components/Form";
import Output from "./components/Output";

function App() {
  return (
    <div>
      <Typography variant="h4" textAlign='center' >CHECK HERE IF YOU ARE ADDICTED TO ANY APPS!</Typography>
      <Form/>
      <Chart/>
      <Output/>
    </div>
  );
}

export default App;
