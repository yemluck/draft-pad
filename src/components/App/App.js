import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


import './App.css';
import Nav from '../Nav/Nav';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import InfoPage from '../InfoPage/InfoPage';
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import CreatePage from '../CreateAndSearch/CreatePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_DRAFTS'});
  }, [dispatch]);





  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not found</h1>} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
