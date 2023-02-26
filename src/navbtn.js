import './button.css'
import myImage from './clear logo.png';
function handleClick() {
  window.location.href = '/';
}

function NavBtn() {
  return (
    <button className='home-button' onClick={handleClick}>
      <img src={myImage} alt="My Image" />
    </button>
  );
}
  export default NavBtn;
