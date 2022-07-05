import { Button, Divider, FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {
  const [custom, setCustom] = useState(true);
  const toggleCustom = () => {
    setCustom(!custom);
  }
  return (
  <Grid container p={5} rowSpacing={2}>
    <Grid container item xs={12}>
      <FormControlLabel control={<Switch color="primary" checked={custom} onClick={toggleCustom} />} label="Custom" labelPlacement="end"/>
    </Grid>
    <Grid container item xs={12}>
      <TextField size="small" label={custom ? "Custom" : "Normal"} variant="outlined" />
    </Grid>
    <Grid container item xs={12}>
      <Button variant="contained">{custom ? "Custom" : "Normal"}</Button>
    </Grid>
    <Grid container item xs={12}>
      <FormControlLabel control={<Switch checked />} label={custom ? "Custom" : "Normal"} />
    </Grid>
  </Grid>
  );
}

export default App;
