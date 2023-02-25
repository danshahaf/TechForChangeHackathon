import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
FontAwesomeIcon.library.add()
function NavBtn(props) {
    return (
      <div>
        <button>
            <FontAwesomeIcon icon={props.icon} />
        </button>
        <p> {props.title} hello  </p>
      </div>
    );
  }
  
  export default NavBtn;
