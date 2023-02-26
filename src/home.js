import './image.css'
import './writing.css'
import NavBar from './navigationbar.js'
import Mission from './mission.js'
import NavBtn from './navbtn.js'
import VideoContainer from './vids';

function Home() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(to bottom right, #8AC2E2, #BDDFF3)',
      height: '110%',
    }}>
      <div className="image-container">
        <NavBtn/>
      </div>
      <div className="body-container">
        <Mission/>
        <VideoContainer/>
      </div>
      <NavBar/>
    </div>
  );
}

export default Home;