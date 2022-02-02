import { Container, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { IconButton } from '@material-ui/core';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



function createData(
    symbol: number,
    title: string,
    definition: string,
    action: any,

) {
    return { symbol, title, definition, action };
}

const rows = [
    createData(1, "Functional", "Courses related to developing and enhancing employee's supervisory or management skills eg. supervisory skills, constructive feedback, influencing and motivating etc", <> <EditIcon />  <CancelOutlinedIcon /> </>),

];


interface TrainingRecommendationViewListProps{
    trainingData : any
    onDelete: (id:string) => void
}

const TrainingRecommendationViewList:React.FC<TrainingRecommendationViewListProps> = (props: TrainingRecommendationViewListProps)=> {
    const { trainingData , onDelete } = props


    console.log(props)
    return (
        <div>

            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ color: "#368DC5" }}> Add Training Recommendation</h2>
                   <Link to = "/training/training-recommendation"><Button variant="outlined"> Add  List </Button></Link> 
                </Box>

                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" style={{ color: "#368DC5" }}> #</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Training Title</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Definition</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {trainingData && trainingData.data.map((row: any) => {
                                return (

                                    <TableRow 
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.symbol}
                                        </TableCell>
                                        <TableCell align="center">{row.title}</TableCell>
                                        <TableCell align="center">{row.definition}</TableCell>
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

export default TrainingRecommendationViewList