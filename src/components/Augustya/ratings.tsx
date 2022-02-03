import React,{useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { AvatarPropsVariantOverrides, Container, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Button } from '@mui/material';
import { useState } from 'react';
import { IconButton } from '@material-ui/core';


function createData(
    symbol: number,
    rating: number,
    action: any,

) {
    return { symbol,rating, action };
}

const rows = [
    createData(1, 1,  <> <EditIcon />  <CancelOutlinedIcon /> </>),
    createData( 2, 2,   <>  <EditIcon />  <CancelOutlinedIcon /> </>),
    createData( 3, 2.5,   <>  <EditIcon />  <CancelOutlinedIcon /> </>),
    createData( 4, 3,   <>  <EditIcon />  <CancelOutlinedIcon /> </>),

];
// interface IRatingsProps{
//     onSubmit? : (ratings:string) => void
//     onDelete? : (id : string) => void
//     ratingsData? :any 
//     onUpdate? : (id:string) => void
//     defaultValue? : any
// }

const Ratings = (props:any) => {
  const {onSubmit,ratingsData, onDelete, onUpdate , defaultValue} = props
  console.log(props)

  const [rating,setRating] = React.useState('')


  useEffect(() => {
    if(defaultValue) {
      setRating(defaultValue.data.rating)
    }

  },[])


    return (
                <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="top"
                style={{ minHeight: '100vh' }}>


                <Grid item xs={12}>
                    <Container  >
                        <Stack spacing={3} alignContent={"center"}>
                            <p style={{ backgroundColor: "light-pink" }}>The ratings which you are giving here will come during the creation of objective description</p>
                            <p><TextField id="outlined-basic" label="Enter Ratings " value={rating} variant="outlined" style={{ width: 600, height: 100 }} onChange={(e)=>setRating(e.target.value)}/></p>
                            <p> <Stack direction="row" spacing={2}>
            <p><Button variant="contained"  onClick = {() => onSubmit (rating) }>Save </Button></p>
            <p><Button variant="outlined">Cancel</Button></p>
            </Stack>
        </p>
                        
                        </Stack>
                    </Container>
                </Grid>
                <Container>
                    <h2 style={{ color: "#368DC5" }}> Added Ratings</h2>
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" style={{ color: "#368DC5" }}> #</TableCell>
                                    <TableCell align="center" style={{ color: "#368DC5" }}>Ratings</TableCell>
                                    <TableCell align="center" style={{ color: "#368DC5" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                {ratingsData  && ratingsData.data.map((row:any) => {
                                    return(
                                    <TableRow
                                        key={row.symbol}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                        {row.symbol}
                                        </TableCell>                                       
                                        <TableCell align="center">{row.rating}</TableCell>
                                        <TableCell align="center">
                                        <>
                                            <IconButton aria-label="EditIcon" onClick = {()=> onUpdate(row._id)}>
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

            </Grid>
        </div>

    );
}

export default Ratings
