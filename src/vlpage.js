import React from 'react';
import './vlpage.css';
import logo from './WeVote_Logo.png';

function VLPage(props) {
    return (
      <div className='VLPage'>
        <div className='Scroll'>
            <div className='WhyVote'> 
                <h1 className='whyvote'>Why Vote?</h1>
                <p>only {} of eligible African Americans/low income ppl with disability vote last round in MA...</p>

                <h2>Help us increase the representation!</h2>
            </div> 

            <div> </div>

            <div> 
                <h1> Your Candidate Hears You! </h1>
                <video Campaign> 
                    <source src={logo}></source>
                </video>
            </div>

            <div>
                <h1> How votes by miniority changed history </h1>
                <div story> 
                    <h1>Stacey Abrams in Georgia</h1>
                    <p>text text text...</p>
                </div>
            </div>








            <div className='VLTitle'>
                <h1> Voter Literacy </h1>
            </div>

            {/*<div class='Logo'> 
                <img src={logo} alt="logo"></img>
            </div>*/}

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
    );
  }
  
  export default VLPage;
