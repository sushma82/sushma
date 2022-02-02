import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from "react";
import { Agent } from 'http';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CreateCalender from './createCalender';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { maxWidth } from '@mui/system';
import OtherRecommendation from '../../components/Augustya/otherRecommendation';



export default function Calender() {


  const [year, setYear] = React.useState('');
  const [yearNumber, setYearNumber] = React.useState('');




  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);

  };


  return (
    <Container sx={{ width: "800px" }}>

      <div >
        <Box sx={{display: 'flex', justifyContent: 'space-evenly' }}>
          <TextField id="outlined-basic" variant="outlined" sx={{ width: "300px" }}
            value={yearNumber} label="2022" onChange={(e) => setYearNumber(e.target.value)} />
          <FormControl sx={{ width: "300px" }} >
            <InputLabel id="demo-simple-select-label">Mid Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Enter Rating"
              onChange={handleChange}
            >
              <MenuItem value={1}>Mid year</MenuItem>
              <MenuItem value={2}>Quarter Year </MenuItem>
              <MenuItem value={3}>End Year</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div>
        <Box sx={{ margin: 8, display: 'flex', justifyContent: 'space-evenly' }}>

          <Stack spacing={2} direction="row">
            <Button variant="contained">Save</Button>
            <Link to="/createCalender"> <Button variant="contained"> Create Calender</Button>  </Link>
          </Stack>
        </Box>

      </div>

    </Container>

  )
}
