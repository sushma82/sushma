import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { textAlign } from '@mui/system';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



interface IOtherRecommendationProps {
  onSubmit: (name:string) => void
}

const OtherRecommendation:React.FC<IOtherRecommendationProps>  = (props:IOtherRecommendationProps) => {
  const {onSubmit} = props

  const [name,setName] = React.useState('')


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
              <p style={{ backgroundColor: "light-pink" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ color: "#368DC5" }}>Add other recommendation</h2>
                <Link to="/training/view-other-recommendation"><Button variant="outlined">View List</Button></Link>
              </Box>
              <p><TextField id="outlined-basic" label="other recommendation " value={name} onChange = {(e) => setName(e.target.value)} variant="outlined" style={{ width: 600, height: 100 }} /></p>
              <p> <Stack direction="row" spacing={3}>
                <p><Button variant="contained" onClick={() => onSubmit(name)}>Save</Button></p>
                <p><Button variant="outlined">Cancel</Button></p>
              </Stack>
              </p>
            </Stack >
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}


export default OtherRecommendation