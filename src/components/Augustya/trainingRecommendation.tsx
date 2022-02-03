import  React, {useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { textAlign } from '@mui/system';
import { Grid } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



export default function TrainingRecommendation(props: any) {
  const { onSubmit,defaultValue } = props

  const [title,setTitle] = React.useState('')
  const [description,setDescription] = React.useState('')

  useEffect(() => {
    if(defaultValue) {
      setTitle(defaultValue.data.title)
      setDescription(defaultValue.data.definition)
    }

  },[])




  console.log(props, "onSubmit")
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
                <h2 style={{ color: "#368DC5" }}>Add Training Recommendation</h2>
                <Link to="/training/view-training-recommendation"><Button variant="outlined">View List</Button></Link>
              </Box>
              <p><TextField id="outlined-basic" label="training Title "  value={title} onChange={(e)=> setTitle(e.target.value)} variant="outlined" style={{ width: 600, height: 100 }} /></p>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                style={{ width: 600, height: 100 }}
              />
              <p> <Stack direction="row" spacing={3}>
                <p><Button variant="contained" onClick={() => onSubmit(title, description)}>Save</Button></p>
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
