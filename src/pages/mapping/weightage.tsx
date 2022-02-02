import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Weightage() {
  return (
    <Box sx={{ flexGrow: 1 ,
                padding:1,
                border: 1 ,
                borderColor: 'grey.500' }}>
      <Grid container spacing={1}>
      
        <Grid item xs={1} >
          <h4  style = {{color : "#368DC5"}}>#</h4>
          <p >1</p>
        </Grid>
        <Grid item xs={2} >
          <h5 style = {{color : "#368DC5"}}>Objective Group</h5>
          <p>Job Objectives</p>
        </Grid>
        <Grid item xs={1}>
          <h5 style = {{color : "#368DC5"}}>Weightage</h5>
          <p> <TextField id="outlined-basic" label="10" variant="outlined" /></p>
        </Grid>
        <Grid item xs={2}>
          <h5 style = {{color : "#368DC5"}}>Objective Type</h5>
          <p>Job Competencies</p>
        </Grid>
        <Grid item xs={1}>
          <h5 style = {{color : "#368DC5"}}>Weightage</h5>
          <p> <TextField id="outlined-basic" label="10" variant="outlined" /></p>
        </Grid>
        <Grid item xs={3}>
          <h5 style = {{color : "#368DC5"}}>Objective Description</h5>
          <p>Knowledge of the Job</p>
          <p>Quality of Work</p>
          <p>Time Management</p>
        </Grid>
        <Grid item xs={1}>
          <h5 style = {{color : "#368DC5"}}>Weightage</h5>
          <p style={{fontSize: "20px"}}> <TextField id="outlined-basic"  variant="outlined" /></p>
          <p> <TextField id="outlined-basic"  variant="outlined" /></p>
          <p> <TextField id="outlined-basic"  variant="outlined" /></p>
        </Grid>
      </Grid>
    </Box>
  );
}
