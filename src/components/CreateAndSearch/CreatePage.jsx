import React from 'react';
import CreateForm from './CreateForm';
import {Link} from 'react-router-dom';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Button from '@mui/material/Button';


function CreatePage(){

  return(
    <>
      <CreateForm />
      <Link to="/">
        <Button sx={{marginLeft: "20px"}}variant="contained" startIcon={<BackspaceIcon />}>
          Cancel
        </Button>
      </Link>
    </>
  )
}

export default CreatePage;