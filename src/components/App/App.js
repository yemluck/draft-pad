import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


import './App.css';
import Nav from '../Nav/Nav';
import CreateAndSearch from '../CreateAndSearch/CreateAndSearch';
import DisplayContainer from '../DisplayContainer/DisplayContainer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_DATA'});
  }, [dispatch]);





  return (
    <Router>
      <Nav />
      <CreateAndSearch />
      <DisplayContainer />

    </Router>
  );
}

export default App;
