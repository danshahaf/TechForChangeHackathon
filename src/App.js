import logo from './logo.svg';
import './App.css';
import './image.css'
import './writing.css'
import NavBar from './navigationbar.js'
import Mission from './mission.js'
import myImage from './clear logo.png';
import VideoContainer from './vids';

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img src={myImage} />
      </div>
      <div className="body-container">
        <Mission/>
        <VideoContainer/>
      </div>
      <NavBar/>
    </div>
  );
}

export default App;
