import React from 'react';
import NavBtn from './navbtn.js';
import './button.css'
function NavBar() {
 return (
    <nav className="navbar">
      <div className="navbar-container">
      <NavBtn title={'Registration + Eligibility'} />
      <NavBtn title={'Plan to vote'} />
      <NavBtn title={'Voter Literacy'} />
      </div>
    </nav>
  );
  }
  
  export default NavBar;