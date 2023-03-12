import React from 'react';
import './DisplayContainer.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


function DisplayContainer () {


  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Box sx={{bgcolor: 'white', height: "75vh"}} />
      </Container>
    </>
  )
}

export default DisplayContainer