import React, { useState } from 'react';
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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function DisplayContainer () {
  const drafts = useSelector((store) => store.drafts)
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const detailedView = (draft) => {
    navigate(`/${draft.id}`)
  }




  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{bgcolor: 'white', height: "75vh", }}>
          {drafts.map(draft => {
            return(
              <div key={draft.id}>
              <div>
                <Card onClick={() => detailedView(draft)} sx={{width: '300px',height: '300px', display: "inline-block", overflow: "scroll", margin: "10px"}} >
                <CardContent >
                  <Typography>{draft.title}</Typography>
                  <Typography>{draft.date}</Typography>
                  <Typography>{draft.note}</Typography>
                  <Typography>{draft.rating}</Typography>
                </CardContent>
              </Card>
              <div>
              <DeleteForeverIcon 
                  sx={{paddingLeft: '150px', }}
                  onMouseEnter={(e) => {setIsShown(true, e); e.target.style.background = '#3fff'}}
                  onMouseLeave={(e) => {setIsShown(false); e.target.style.background = 'white' }}
                  fontSize='large' className='delBtn'>
                     Delete 

                </DeleteForeverIcon>
                {
              isShown &&
                <div>Click to delete</div>
            }
              </div>
            </div>
            </div>
            )
          })}
        </Box>
      </Container>
    </>
  )
}

export default DisplayContainer