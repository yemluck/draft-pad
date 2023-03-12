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

function* createDraft(action){
  try {
    yield axios.post('/api/drafts', action.payload)
    console.log('this is the action.payload', action.payload);
  } catch (error) {
    console.log('Error creating draft', error);
  }
} // end function createDraft

function* draftPadSaga() {
  yield takeLatest('FETCH_DRAFTS', fetchDraftPad);
  yield takeLatest('CREATE_DRAFT', createDraft);

}

export default draftPadSaga;