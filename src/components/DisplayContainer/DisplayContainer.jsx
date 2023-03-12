import React from 'react';
import './DisplayContainer.css';
import { useDispatch, useSelector } from 'react-redux';
// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function DisplayContainer () {
  const drafts = useSelector((store) => store.drafts)
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{bgcolor: 'white', height: "75vh"}}>
          {drafts.map(draft => {
            return(
              <Card key={draft.id}>
                <CardContent>
                  <Typography>{draft.title}</Typography>
                  <Typography>{draft.date}</Typography>
                  <Typography>{draft.note}</Typography>
                  <Typography>{draft.rating}</Typography>
                </CardContent>
                <button> Edit</button>
                <button> Delete </button>
              </Card>
            )
          })}
        </Box>
      </Container>
    </>
  )
}

export default DisplayContainer