// About.jsx

import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <nav>
        {/* Navbar for navigation */}
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default About;