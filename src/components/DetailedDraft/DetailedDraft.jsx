import React, { useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './DetailedDraft.css';


function DetailedDraft(){

  const params = useParams();
  const dispatch = useDispatch()
  // from store
  const draft = useSelector(store=> store.draftDetail);

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
      <div>
        <p>{draft.id}</p>
        <p>{draft.title}</p>
        <p>{draft.date}</p>
        <p>{draft.note}</p>
        <p>{draft.rating}</p>
      </div>

      <Link to="/"><button>Back</button></Link>
    </>
  )
}


export default DetailedDraft;