import React from 'react';
import './vlpage.css';
import logo from './WeVote_Logo.png';

function VLPage(props) {
    return (
      <div className='VLPage'>
        <div className='Scroll'>









            <div className='VLTitle'>
                <h1> Voter Literacy </h1>
            </div>

            {/*<div class='Logo'> 
                <img src={logo} alt="logo"></img>
            </div>*/}
            <div className='VLSec'>
                <div className='VLSections'>
                    {/* Resource by Demographics */}
                    <h2> Resource by Demographics </h2>
                    <p> data input here...</p>
                </div>
                <div className='VLSections'>
                    {/* Volunteering Opportunin*/}
                    <h2> Volunteering Opportunities </h2>
                    <p> data input here...</p>
                </div>
                <div className='VLSections'>
                    {/* Upcoming Events */}
                    <h2> Upcoming Events </h2>
                    <p> data input here...</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default VLPage;
