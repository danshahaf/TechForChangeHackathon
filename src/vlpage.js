import React from 'react';
import './vlpage.css';
import logo from './WeVote_Logo.png';

function VLPage() {
    return (
      <div className='VLPage'>
        <div className='Scroll'>


            <div className='VLTitle'>
                <h1> Engagements </h1>
            </div>

            {/*<div class='Logo'> 
                <img src={logo} alt="logo"></img>
            </div>*/}
            <div className='VLSec'>
                <div className='row'>
                    <div className='VLSections'>
                        {/* Resource by Demographics */}
                        <h2> Know your Sheriff </h2>
                        <p> Sheriffs make decisions every day that impact our communities—but most Massachusetts voters don’t know who their sheriff is. Know Your Sheriff is a public voter education campaign by the ACLU of Massachusetts to build voter awareness about the life-changing decisions that sheriffs make.
                        </p>
                        <br/>
                        <a href='https://bpl.bibliocommons.com/v2/events?q=ACLU%20of%20Massachusettes&_ga=2.22156281.397911856.1661106332-147878198.1659012866 ' class='btn'> Read more --- </a>
                    </div>
                    <div className='VLSections'>
                        {/* Volunteering Opportunin*/}
                        <h2> Group Viewing and Discussion </h2>
                        <p> The News Literacy Project's Election Misinformation Series – The BPL is hosting an in-person viewing of The News Literacy Project’s webinars discussing election misinformation, followed by a conversation circle facilitated by a BPL librarian to discuss Massachusetts-specific voting resources ahead of the midterm elections on November 8th
                        </p>
                        <br/>
                        <a href='https://bpl.bibliocommons.com/events/633f2b2716d1429e01c866fc' class='btn'> Read more --- </a>
                    </div>
                    <div className='VLSections'>
                        {/* Upcoming Events */}
                        <h2> Volunteer With a Campaign </h2>
                        <p> Did you find a candidate that you feel strongly about? One of the best ways to help them get elected is to volunteer. Whether it’s phonebanking, handing out campaign literature, gathering signatures, or showing up to events. There are many different ways to assist and varying levels of commitment. Figure out what level of involvement is right for you!
                        </p>
                        <br/>
                        <a href='https://www.michelleforboston.com/volunteer' class='btn'> Read more --- </a>
                    </div>
                </div>


                <div className='row'>
                    <div className='VLSections'>
                        {/* Resource by Demographics */}
                        <h2> Volunteer With Organizations You Care About </h2>
                        <p> Are there policy issues or values that you really care about? Then get involved and volunteer with organizations that align with your interest and lobby for the causes that matter the most to you.</p>
                        <br/>
                        <a href='https://www.massvote.org/volunteer' class='btn'> Read more --- </a>
                    </div>
                    <div className='VLSections'>
                        {/* Volunteering Opportunin*/}
                        <h2> Attend City/Town Hall Meetings </h2>
                        <p> To find out when town hall meetings in your Congressional district will be held, monitor your Member’s Congressional website, sign up for your Member’s email alerts, or periodically call for event updates. Members usually hold town hall meetings in different areas around their district. While it’s best to attend the one closest to your home, don’t hesitate to also attend meetings in other parts of your district.
                        </p>
                        <br/>
                        <a href='https://www.boston.gov/departments/city-council' class='btn'> Read more --- </a>
                    </div>
                    <div className='VLSections'>
                        {/* Upcoming Events */}
                        <h2> Exercise Your Right to Assembly </h2>
                        <p> Freedom of assembly is recognized as a civil liberty, human right, and political right rather than a privilege. Freedom of assembly is often associated with the right to protest and the freedom to assemble or join an association. Freedom of assembly is included in many international human rights agreements and/or declarations.
                        </p>
                        <br/>
                        <a href='https://www.aclum.org/en/know-your-rights/know-your-rights-demonstrations-and-protests' class='btn'> Read more --- </a>
                    </div>
                </div>


                <div className='row'>
                    <div className='VLSections'>
                        {/* Resource by Demographics */}
                        <h2> Contact Your Representatives </h2>
                        <p> If you know who your representative is but you are unable to contact them using their contact form, the Clerk of the House maintains addresses and phone numbers of all House members and Committees, or you may call (202) 224-3121 for the U.S. House switchboard operator.</p>
                        <br/>
                        <a href='https://www.house.gov/representatives/find-your-representative' class='btn'> Read more --- </a>
                    </div>
                    <div className='VLSections'>
                        {/* Volunteering Opportunin*/}
                        <h2> Make Donations</h2>
                        <p> Whether you want to campaign for voter rights in your community, encourage more people to vote, or volunteer in your local elections, there is a charity for you. Keep reading to learn more about what the best charities for voting rights in America are all about, how they work, and what your best way would be to make a contribution.
                        </p>
                        <br/>
                        <a href='https://impactful.ninja/best-charities-for-voting-rights-in-america/' class='btn'> Read more --- </a>
                    </div>
                    <div className='VLSections'>
                        {/* Upcoming Events */}
                        <h2> Run for Office Yourself! </h2>
                        <p> it is always important for citizens to take part in the process of who gets elected to what office. It is just as important to hold those in elected office accountable once they have been elected.
                        </p>
                        <br/>
                        <a href='https://www.theascendfund.org/post/why-you-yes-you-should-run-for-office-in-2022' class='btn'> Read more --- </a>
                    </div>
                </div>
            </div> 
        
        </div>
    </div>
    );
  }
  
  export default VLPage;
