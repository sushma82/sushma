import { Container, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Button } from '@mui/material';
import { Box } from '@mui/material';



function createData(
    symbol: number,
    rating: number,
    ratingScale:string,
    definition:string,
    action: any,

) {
    return { symbol, rating, ratingScale, definition, action };
}

const rows = [
    createData(1,1, "Not Delivering", "Employee performance does not meet the minimum expectations for this job and is not acceptable.There are many performance gaps that have been identified and require immediate action", <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(2,1.5, "Not Delivering", "Employee performance does not meet the minimum expectations for this job and is not acceptable.There are many performance gaps that have been identified and require immediate action", <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(3,2, "Not Delivering", "Employee performance does not meet the minimum expectations for this job and is not acceptable.There are many performance gaps that have been identified and require immediate action", <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(4,2.5, "Not Delivering", "Employee performance does not meet the minimum expectations for this job and is not acceptable.There are many performance gaps that have been identified and require immediate action", <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(5,3, "Not Delivering", "Employee performance does not meet the minimum expectations for this job and is not acceptable.There are many performance gaps that have been identified and require immediate action", <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(6,4, "Not Delivering", "Employee performance does not meet the minimum expectations for this job and is not acceptable.There are many performance gaps that have been identified and require immediate action", <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData(7,5, "Not Delivering", "Employee performance does not meet the minimum expectations for this job and is not acceptable.There are many performance gaps that have been identified and require immediate action", <> <EditIcon />  <CancelOutlinedIcon /> </>),
   
];


interface IRatingScaleDescriptionViewListProps {
ratingScaleData : any
}

const RatingScaleDescriptionViewList:React.FC<IRatingScaleDescriptionViewListProps>= (props:IRatingScaleDescriptionViewListProps) => {
    return (
        <div>

            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ color: "#368DC5" }}> Add Rating Scale Description</h2>
                    <Button variant="outlined"> Add  List </Button>
                </Box>

                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" style={{ color: "#368DC5" }}> #</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Rating</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Rating Scale</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Definition</TableCell>
                                <TableCell align="center" style={{ color: "#368DC5" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.symbol}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.symbol}
                                    </TableCell>
                                    <TableCell align="center">{row.rating}</TableCell>
                                    <TableCell align="center">{row.ratingScale}</TableCell>
                                    <TableCell align="center">{row.definition}</TableCell>
                                    <TableCell align="center">{row.action}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>

    );
}

export default RatingScaleDescriptionViewList