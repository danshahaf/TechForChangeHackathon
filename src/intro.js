import React from 'react';
import './intro.css';
import VC2 from './VideoContainer2';
import IC from './ImageContainer';
import LC_logo from './laColaborativa.jpeg';
import TSP_logo from './TSP.png';
import WVN_logo from './WVN.png';


function Intro(props) {
    return (
        <div> 
            <div className='WhyVote'> 
                <h1 className='whyvote'>Why Vote?</h1>
                <p>Only <span className='bigint'>63%</span> of eligible <span className='highlight'>African American</span> voters voted in 2020.</p>
                <p>Only <span className='bigint2'>54%</span> of eligible <span className='highlight'>Latino</span> voters voted in 2020.</p>
                <p>Only <span className='bigint'>63%</span> of eligible voters with annual income between <span className='highlight'>$30,000 - $39,000</span> voted in 2020.</p>
                <br/>
                <h1 className='Message'> Help us increase the representation! </h1>

                <br/>
                <br/>
                
            </div>

            <div className='Impact'>
                <h2> Learn more: </h2>
                <div className='videos'> 
                    <VC2/>
                </div>

                <div className='websites'>
                    <IC url={"https://wevotenext.us/"} imageFile={WVN_logo}/>
                    <IC url={"https://la-colaborativa.org/programs/"} imageFile={LC_logo} />
                    <IC url={"https://www.sentencingproject.org/policy-brief/voting-in-jails/"} imageFile={TSP_logo} />
                </div>
            </div>
        </div>
    );
}

export default Intro;