import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PauseIcon from '@mui/icons-material/Pause';
import EditIcon from '@mui/icons-material/Edit';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Container } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';


function createData(
    number: number,
    appraisal: string,
    date: string,
    action: any,

) {
    return { number, appraisal, date, action };
}

const rows = [
    createData(1, 'G12 2021 mid year performance appraisal', '20/09/21',
        <> <ContentCopyIcon /> <PlayArrowIcon/> <PauseIcon />  <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(2, 'G12 2021 mid year performance appraisal', '20/08/21', <> <ContentCopyIcon /> <PlayArrowIcon/>  <PauseIcon />  <EditIcon />  <CancelOutlinedIcon /> </>)
];

export default function CreateTable() {

    
  const [year, setYear] = React.useState('');
  const [yearNumber, setYearNumber] = React.useState('');




  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);

  };

    return (
        <>
            <Container>
            <Stack direction="row" spacing={3}>
                <h2 style={{ color: "#368DC5" }}> Appraisal Calender Lists</h2>
                <Box  sx={{ display: 'flex', justifyContent: 'space-between' , width:"200px"}}><TextField id="outlined-basic" variant="outlined" sx={{ width: "300px" }}
            value={yearNumber} label="2022"  onChange={(e) => setYearNumber(e.target.value)} />
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
          </FormControl></Box>
                
          </Stack>
                
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" style={{ color: "#368DC5" }}>#</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}> Performance Appraisal Forms</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Last Modified Date</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.number}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.number}
                                    </TableCell>
                                    <TableCell align="center">{row.appraisal}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">{row.action}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}