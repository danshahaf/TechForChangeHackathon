import './image.css'
import './writing.css'
import NavBar from './navigationbar.js'
import NavBtn from './navbtn.js'

function Reg() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(to bottom right,#8AC2E2, #BDDFF3)',
      height: '100vh',
    }}>
      <div className="image-container">
        <NavBtn/>
      </div>
      <NavBar/>
    </div>
  );
}

export default Reg;