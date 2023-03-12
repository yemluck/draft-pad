import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchDraftPad(action) {
  try{
    const draftPad = yield axios.get('/api/drafts');
    console.log('get drafts', draftPad.data);
    yield put({type: 'SET_DRAFTS', payload: draftPad.data});
  } catch (error) {
    console.log('Error fetching draft pad', error);
    
  }
} // end function fetchDraftPad





function* draftPadSaga() {
  yield takeLatest('FETCH_DRAFTS', fetchDraftPad);

}

export default draftPadSaga;