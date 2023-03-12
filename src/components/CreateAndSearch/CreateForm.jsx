import React, {useState} from 'react';
import swal from 'sweetalert';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './CreateForm.css';
// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function CreateForm(){
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')
  const [rating, setRating] = useState(0)

  // function to run on submission of form
  const createNote = (evt) => {
    evt.preventDefault()
    console.log('in create form');

    dispatch({
      type: 'CREATE_DRAFT',
      payload: {
        title: title,
        note: note,
        date: date,
        rating: rating
      }
    })

    swal({
      title: 'Note created',
      // text: "Note successfully created",
      icon: "success",
      button: '✅'
    })
    .then((value) => {
      dispatch({
        type: 'FETCH_DRAFTS'
      });
      // after dispatch, navigate back to landing page
      Navigate("/")
    })
  }

  return(
    <Box
      component='form'
      onSubmit={createNote}
      sx={{
        '& > :not(style)': { m: 1.2, width: '25ch', },
        marginLeft: "500px"
      }}
      autoComplete='off'
    >
      <TextField id='standard-basic' 
          label='Title' 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant='standard' /><br></br>
      <TextField id='standard-basic' 
        variant='standard' 
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type='date'/><br></br>
      <TextField id='filled-multiline-static' 
          label='Note' 
          multiline
          value={note}
          onChange={(e) => {setNote(e.target.value)}}
          required
          rows={5}
          variant='filled' /><br></br>
      <Typography component="legend" sx={{textAlign:'center'}}> Priority </Typography>
      <Rating  
         size='large'
         variant='standard'
         type='number'
         defaultValue={0}
         value={rating}
         onChange={(e) =>(setRating(Number(e.target.value)))}
         /><br></br>
         <input 
          type="submit"
          value="SUBMIT"
          
         />
    </Box>
  )
}

export default CreateForm