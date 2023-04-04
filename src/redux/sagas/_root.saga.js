import { all } from 'redux-saga/effects';
import draftSaga from './draft.saga';
import draftDetailSaga from './draftDetail.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga but remember it 
// is redux so we're putting in store.js which will be sourced
//into index.js

// some sagas trigger other sagas, will give example as needed

export default function* rootSaga() {
    yield all([
        // put all other sagas imported into the root saga here
        // remember sagas are like called functions
        draftSaga(),
        draftDetailSaga(),

    ])
} // end export default