import React from 'react';
import NavBtn from './navbtn.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    return (
      <div>
        <h1> HELO WORD TEST</h1>
        <NavBtn icon={faInfo} title={'information'} />
      </div>
    );
  }
  
  export default NavBar;