import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  Open:boolean;
  handleClose:() => void;
  handleOpen: () => void
  value: any
}

const BasicModal: React.FC<BasicModalProps> = (props: BasicModalProps) => {
  const{ Open, handleClose, handleOpen, value} = props;
  
  
  return (
    <div>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={()=>handleOpen()} > Add Objective Group</Button>
      <Modal
        open={Open}
        onClose={()=>handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormControl>
            <FormLabel>Enter Objective Group Name</FormLabel>
            <OutlinedInput />
            </FormControl>
            <div> 
            <Button variant = "contained"  onClick={()=>handleClose()} >save</Button>
            <Button onClick={()=>handleClose()}> cancel</Button>
            </div>
           
        </Box>
      </Modal>
    
    </div>
  );
}


export default BasicModal