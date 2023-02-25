import React from 'react';
import './button.css'
function NavBtn(props) {
    return (
      <div className="button-container">
        <button className="button">
        <div class="text">{props.title}</div>
        </button>
        
      </div>
    );
  }
  
  export default NavBtn;
