import React from 'react';
import './checkstyles.css'
const Checklist = () => {
  return (
    <div className="checklist">
      <div className="checklist-item">
        <button className='button-styles'>1</button>
        <div className="checklist-popup">
          <p>Check Your State's Laws</p>
        </div>
      </div>
      <div className="checklist-item">
        <button className='button-styles'>2</button>
        <div className="checklist-popup">
          <p>Do you plan on mailing in a ballot or voting in person?</p>
        </div>
      </div>
      <div className="checklist-item">
        <button className='button-styles'>3</button>
        <div className="checklist-popup">
          <p>Rideshare or Ride There</p>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
