import './App.css';
import './image.css'
import './writing.css'
import NavBar from './navigationbar.js'
import NavBtn from './navbtn.js'

function Reg() {
  return (
    <div className="App">
      <div className="image-container">
        <NavBtn/>
      </div>
      <NavBar/>
    </div>
  );
}

export default Reg;