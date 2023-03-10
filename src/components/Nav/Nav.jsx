import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Nav.css"

function Nav(){

  return(
    <div className="nav">
        <Link to="home">
          <h2 className="nav-title">DRAFT PAD</h2>
        </Link>
      <div>
        <Link className="navLink" to="/info">
          Info
        </Link>    
        <Link className="navLink" to="/faq">
          FAQ
        </Link>    
        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  )
}

export default Nav
