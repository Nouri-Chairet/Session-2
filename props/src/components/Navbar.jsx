import music from '../assets/music-solid.svg';
import '../App.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={music} alt='music' height={33} />
        </div>
        <h1>My Playlist </h1>
      
    </div>
  )
}

export default Navbar
