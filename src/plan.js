import './image.css'
import './writing.css'
import NavBar from './navigationbar.js'
import NavBtn from './navbtn.js'
import Checklist from './checklist'

function Plan() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(to bottom right,#8AC2E2, #BDDFF3)',
      height: '100vh',
    }}>
      <div className="image-container">
        <NavBtn/>
      </div>
      <Checklist/>
      <NavBar/>
    </div>
  );
}

export default Plan;