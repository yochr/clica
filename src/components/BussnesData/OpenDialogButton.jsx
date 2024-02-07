import React, { useState } from 'react';
import Button from '@mui/material/Button';
import EditBusinessDetails from './EditBusinessDetails';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function OpenDialogButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  return (
    <div>
      <Fab color="warning" aria-label="edit">
      <EditIcon />
      </Fab>
      {open && <EditBusinessDetails setOpen={setOpen}/>}
    </div>
  );
}

export default OpenDialogButton;
