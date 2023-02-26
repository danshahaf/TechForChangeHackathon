import logo from './logo.svg';
import './App.css';
import NavBar from './navigationbar.js'
import VLPage from './vlpage.js'

function App() {
  return (
    <div className="App">
      <h1> VoteMA </h1>
      <VLPage className="VL"/>
      <NavBar />
    </div>
  );
}

export default App;
