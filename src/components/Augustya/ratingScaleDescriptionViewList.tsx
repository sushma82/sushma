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




const RatingScaleDescriptionViewList = (props:any) => {
    const {ratingScaleData} = props

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
                        {ratingScaleData && ratingScaleData.data.map((row: any) => {
                                return (
                                    <TableRow
                                    key={row.symbol}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.symbol}
                                    </TableCell>
                                    <TableCell align="center">{row.rating.rating}</TableCell>
                                    <TableCell align="center">{row.rating_scale}</TableCell>
                                    <TableCell align="center">{row.definition}</TableCell>
                                    <TableCell align="center">{row.action}</TableCell>
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

export default RatingScaleDescriptionViewList