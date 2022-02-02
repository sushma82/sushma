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






export default function CheckboxTable1() {

    
    const { data, isLoading, error } = useGetEmployeeQuery('')



    // const [employee, setEmployee] = React.useState('')

    const [check, setCheck] = React.useState<any>([])
   
    
    // const selectAll = () => {
    //     setCheck([])
    //     data.data.map((j:any)=> {
           
    //        console.log(j._id, "Array")
    //        setCheck(j._id)
    //        console.log(check, "employee")
 
    //     })
    // }

    const listOfEmployees = (id: string) => {
      
        setCheck((prevCheck: string[]) => {
              console.log(id, "Clicked")
            return [...prevCheck, id]
          
        })
      
    }
 //  const allChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.checked) {
         
//         }
    
//       };


    // React.useEffect(() => {
    //   setEmployee(data)
    // })


    return (
        <Container>


            <div>
                {isLoading ? <p> Loading</p> : <>
                    <>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>

                                    <TableRow>
                                        <TableCell align="center" style={{ color: "#368DC5" }} padding="checkbox"><Checkbox/> </TableCell>
                                        <TableCell align="center" style={{ color: "#368DC5" }}>Employee Name</TableCell>
                                        <TableCell align="center" style={{ color: "#368DC5" }}>Employee Code</TableCell>
                                        <TableCell align="center" style={{ color: "#368DC5" }}>Section</TableCell>
                                        <TableCell align="center" style={{ color: "#368DC5" }}>Position</TableCell>
                                        <TableCell align="center" style={{ color: "#368DC5" }}>Grade</TableCell>
                                        <TableCell align="center" style={{ color: "#368DC5" }}>Line Manager</TableCell>
                                        <TableCell align="center" style={{ color: "#368DC5" }}>Line Manager 1</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.data.map((employee: any) => (
                                        <TableRow
                                            key={employee.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >

                                            <TableCell align="center" style={{ color: "#368DC5" }} padding="checkbox">
                                                <Checkbox
                                                    onClick={() => listOfEmployees(employee._id)} />

                                            </TableCell>
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