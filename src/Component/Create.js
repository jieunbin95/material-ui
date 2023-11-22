import { Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import React, { useState } from "react";

const Create = () => {
  const [open,setOpen]=useState(false)

  return (
    <>
    <Tooltip title="Create" sx={{position:'fixed', bottom:'20px', right:'20px'}}>
      <Fab onClick={()=>setOpen(true)} color='secondary'>
        <CreateIcon />
      </Fab>
    </Tooltip>

    <Modal
  open={open}
  onClose={()=>setOpen(false)}
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
  </Modal>
    </>
  );
};

const style={
  position:'absolute',
  width:400,
  backgroundColor:'background.paper',
  top:'50%',
  left:'50%',
  transform:'translate(-50%, -50%)',
  border:'2px solid #ef5350',
  p:4,
  boxShadow:24
}

export default Create;
