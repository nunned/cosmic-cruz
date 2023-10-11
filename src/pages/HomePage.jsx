import { Link } from 'react-router-dom';
import './styles/homepage.css'; // Assuming you'll store styles in HomePage.css

function HomePage() {
  return (
    <div className='bg-wrap'>
      <nav className="nav-list">
        <div className="item-container">
          <Link to="/barberservice" className="nav-sphere">Barbering Services</Link>
        </div>
        <div className="item-container">
          <Link to="/apparel" className="nav-sphere">Apparel</Link>
        </div>
        <div className="item-container">
          <Link to="/travelguide" className="nav-sphere">Travel Guides</Link>
        </div>
        <div className="item-container">
          <Link to="/visuals" className="nav-sphere">Visuals</Link>
        </div>
        <div className="item-container">
          <Link to="/about" className="nav-sphere">About Me</Link>
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
