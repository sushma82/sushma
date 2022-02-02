import * as React from 'react';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { useGetEmployeeQuery } from '../../service/'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';





export default function Position() {
  const { data, isLoading, error } = useGetEmployeeQuery('')
  console.log(data)

  const [grade, setGrade] = React.useState('');
  const [division, setDivision] = React.useState('');
  const [section, setSection] = React.useState('');
  const [position, setPosition] = React.useState('');

  

  const [employee, setEmployee] = React.useState('')
  // React.useEffect(() => {
  //   setEmployee(data)
  // })






  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
    setDivision(event.target.value as string);
    setSection(event.target.value as string);
    setPosition(event.target.value as string);

  };


  return (
    <Container>

      <div>
        <FormControl variant="standard" sx={{ m: 3, minWidth: 80 }}><Button variant="outlined" >
          All
        </Button></FormControl>


        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Grade</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={grade}
            onChange={handleChange}
            label="Grade"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Division</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={division}
            onChange={handleChange}
            label="Division"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Section</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={section}
            onChange={handleChange}
            label="Section"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={position}
            onChange={handleChange}
            label="Position"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>


        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Search Here
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div>
        {isLoading ? <p> Loading</p> : <>
          <>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>

               
                  <TableRow>
                    <TableCell align="center" style = {{color : "#368DC5"}} padding="checkbox"><Checkbox/> </TableCell>
                    <TableCell align="center" style = {{color : "#368DC5"}}>Employee Name</TableCell>
                    <TableCell align="center" style = {{color : "#368DC5"}}>Employee Code</TableCell>
                    <TableCell align="center" style = {{color : "#368DC5"}}>Section</TableCell>
                    <TableCell align="center" style = {{color : "#368DC5"}}>Position</TableCell>
                    <TableCell align="center" style = {{color : "#368DC5"}}>Grade</TableCell>
                    <TableCell align="center" style = {{color : "#368DC5"}}>Line Manager</TableCell>
                    <TableCell align="center" style = {{color : "#368DC5"}}>Line Manager 1</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.data.map((employee: any) => (
                    <TableRow
                      key={employee.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" style = {{color : "#368DC5"}} padding="checkbox"><Checkbox/> </TableCell>
                      <TableCell align="center">{employee.EmployeeName}</TableCell>
                      <TableCell align="center">{employee.EmployeeCode}</TableCell>
                      <TableCell align="center">{employee.EmployeeSection}</TableCell>
                      <TableCell align="center">{employee.EmployeePosition}</TableCell>
                      <TableCell align="center">{employee.EmployeeGrade}</TableCell>
                      <TableCell align="center">{employee.LineManager}</TableCell>
                      <TableCell align="center">{employee.LineManager1}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        </>
        }

      </div>
    </Container >

  );
}
