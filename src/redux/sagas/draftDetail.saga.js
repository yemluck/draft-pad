import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDraftDetail(action) {
  console.log('this is the action***', action);
  
  try{
    const draftDetail = yield axios.get('/api/draft/draftDetail', 
      {params: {
        id: action.payload
      }
    });

    // send response from server to reducer
    yield put({type: 'SET_DRAFT_DETAIL', payload: draftDetail.data})
  } catch(error) {
    console.log('Error fetching draft detail', error);
    
  }


} // end function fetchDraftDetail



function* draftDetailSaga() {
  yield takeLatest('DRAFT_DETAIL', fetchDraftDetail);
}

export default draftDetailSaga