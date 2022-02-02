import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import Weightage from '../../pages/mapping/weightage'
import Position from '../../pages/mapping/position'
import Calender from '../../pages/mapping/calender'
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { light } from "@mui/material/styles/createPalette";
import { lighten } from "@material-ui/core";
import { Container } from '@material-ui/core';
import { Paper } from "@material-ui/core";



 const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 }));





export default function CreateMapping() {

  const [active, setActive] = useState("weightage");

  return (
    <>
    <h2 style = {{color : "#368DC5"}}> Templates </h2>

    <Container >
  
      <Grid container spacing={2}>
        <Grid item xs={1}>
        <Stack spacing={2}>
        <Item style = {{color : "#368DC5"}}>Manager</Item>
        <Item >Developer</Item>
        <Item >Designer</Item>
        </Stack>
        </Grid>

        
        <Grid item xs={1}>
        <Stack spacing={2}>
        <Item onClick={() => setActive("weightage")} style = {{color : "#368DC5"}}>Weightage</Item>
        <Item onClick={() => setActive("position")}>Position</Item>
        <Item onClick={() => setActive("calender")}>Calender</Item>
        </Stack>
        </Grid>

        <Grid item xs={10}>
          
          <MenuList>
            <li>{active === "weightage" && <Weightage />}</li>
            <li>{active === "position" && <Position />}</li>
            <li>{active === "calender" && <Calender />}</li>
          </MenuList>
        
        </Grid>
        
      </Grid>
  
    </Container>
    </>
  );
}
