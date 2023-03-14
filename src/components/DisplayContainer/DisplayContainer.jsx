import React from 'react';
import './DisplayContainer.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const detailedView = (draft) => {
    console.log('this is the draft', draft);
    navigate(`/${draft.id}`)
  }




  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{bgcolor: 'white', height: "75vh"}}>
          {drafts.map(draft => {
            return(
              <Card onClick={() => detailedView(draft)} key={draft.id}>
                <CardContent>
                  <Typography>{draft.title}</Typography>
                  <Typography>{draft.date}</Typography>
                  <Typography>{draft.note}</Typography>
                  <Typography>{draft.rating}</Typography>
                </CardContent>
                <Button onClick={()=> console.log('in on click')}> Edit</Button>
                <Button> Delete </Button>
              </Card>
            )
          })}
        </Box>
      </Container>
    </>
  )
}

export default DisplayContainer