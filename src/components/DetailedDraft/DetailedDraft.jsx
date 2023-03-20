import React, { useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './DetailedDraft.css';


function DetailedDraft(){

  const params = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'DRAFT_DETAIL',
      payload: Number(params.id)
    })
  },[params.id])

  return(
    <>
      <h2> in detailed draft</h2>
      <h1>Draft number: {params.id}</h1>
      <Link to="/"><button>Back</button></Link>
    </>
  )
}


export default DetailedDraft;