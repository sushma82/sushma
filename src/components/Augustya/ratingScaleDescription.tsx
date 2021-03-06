import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { textAlign } from '@mui/system';
import { Grid } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



export default function RatingScaleDescription(props: any) {

    const { onSubmit, ratings, defaultValue } = props

    const [rating, setRating] = React.useState('');
    const [ratingScale, setRatingScale] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [edit,setEdit]= React.useState(true)

    const handleChange = (event: SelectChangeEvent) => {
        setRating(event.target.value as string);

    };

    

    useEffect(() => {
        if (defaultValue) {
            if (defaultValue.data._id) {
                // setRating(defaultValue.data.rating._id)

            }
            setRatingScale('61fbca11b14b344976c5815a')

            setRatingScale(defaultValue.data.rating_scale)
            setDescription(defaultValue.data.definition)
            console.log(defaultValue.data._id, 'ratings')
        }

    }, [])

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
                    <Container >
                        <Stack spacing={3} alignContent={"center"}>
                            <p style={{ backgroundColor: "light-pink" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h2 style={{ color: "#368DC5" }}>Add Rating Scale Description</h2>
                                <Link to="/rating-scale-description-ViewList"><Button variant="outlined">View List</Button></Link>
                            </Box>
                            <p>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Enter Rating</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={rating}
                                        label="Enter Rating"
                                        onChange={handleChange}
                                    > {
                                            ratings && ratings.data.map((i: any) => {
                                                return (
                                                    [
                                                        <MenuItem value={i._id}>{i.rating}</MenuItem>
                                                    ]
                                                )
                                            })
                                        }



                                    </Select>
                                </FormControl>
                            </p>
                            <p><TextField id="outlined-basic" label="Rating Scale" value={ratingScale} variant="outlined" style={{ width: 600, height: 100 }} onChange={(e) => setRatingScale(e.target.value)} /></p>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Definition"
                                style={{ width: 600, height: 100 }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <p> <Stack direction="row" spacing={3}>
                                <p><Button variant="contained" onClick={() => onSubmit(rating, ratingScale, description)}>Save</Button></p>
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
