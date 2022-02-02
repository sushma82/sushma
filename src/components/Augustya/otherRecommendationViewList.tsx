import Stack from '@mui/material/Stack';
import { Container, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Button } from '@mui/material';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';



function createData(
    symbol: number,
    title: string,
    action: any,

) {
    return { symbol, title, action };
}

const rows = [
    createData(1, "PIP", <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(2, "Promotion", <>  <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(3, "Demotion", <>  <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(4, "Salary Review", <>  <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(5, "Job Rotation", <>  <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(6, "Disciplinary Action", <>  <EditIcon />  <CancelOutlinedIcon /> </>),

];

interface IOtherRecommendationViewListProps {
otherData : any
onDelete : (id : string) => void
}

const OtherRecommendationViewList: React.FC<IOtherRecommendationViewListProps>  = (props:IOtherRecommendationViewListProps) => {
   const {otherData,onDelete} = props

    return (
        <div>

            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ color: "#368DC5" }}> Add Other Recommendation</h2>
           <Link to = "/otherRecommendationPage"><Button variant="outlined"> Add  List </Button></Link>     
                </Box>

                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" style={{ color: "#368DC5" }}> #</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Training Title</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {otherData && otherData.data.map((row: any) => {
                                return (
                                    <TableRow
                                    key={row.symbol}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.symbol}
                                    </TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">
                                        <>
                                            <IconButton aria-label="EditIcon">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="CancelOutlinedIcon " onClick={() => onDelete(row._id)}>
                                                <CancelOutlinedIcon  />
                                            </IconButton>
                                        </>
                                    </TableCell>
                                </TableRow>
                                )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>

    );
}

export default OtherRecommendationViewList