import React, {useState} from 'react';
import swal from 'sweetalert';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function CreateForm(){
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // function to run on submission of form

  const createNote = (evt) => {
    evt.preventDefault()
    console.log('in create form');

    // after dispatch, navigate back to landing page
    Navigate("/")
  }

  return(
    <form onSubmit={createNote}>
      <h2>anything in the form</h2>
    </form>
  )
}

export default CreateForm