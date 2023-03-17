import React from 'react';
import {useNavigate, Link, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './DetailedDraft.css';


function DetailedDraft(){

  const params = useParams();

  console.log('this is params,', params);
  return(
    <>
      <h2> in detailed draft</h2>
      <h1>{params.id}</h1>
      <Link to="/"><button>Back</button></Link>
    </>
  )
}


export default DetailedDraft;