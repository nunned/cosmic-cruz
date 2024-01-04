import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles/homepage.css';

function HomePage() {
  const navItems = [
    { route: "/barberservice", label: "Barbering" },
    { route: "/apparel", label: "Apparel" },
    { route: "/travelguide", label: "Travel Guides" },
    { route: "/visuals", label: "Visuals" },
    { route: "/about", label: "About Me" }
  ];

  // Adjust the position and hover effect for each item
  const itemStyles = [
    { top: "20%", left: "50%", hoverY: [0, -10] },
    { top: "55%", left: "20%", hoverY: [0, -10] },
    { top: "40%", left: "80%", hoverY: [0, 10] },
    { top: "60%", left: "50%", hoverY: [0, 10] },
    { top: "80%", left: "30%", hoverY: [0, -10] }
    // Adjust these values to suit your layout
  ];

  return (
    <div className='bg-wrap'>
      <div className="layer1"></div>
      <div className="layer2"></div>
      <nav className="nav-list">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className="item-container"
            style={{ top: itemStyles[index].top, left: itemStyles[index].left }}
            initial={{ y: 0 }}
            animate={{ y: itemStyles[index].hoverY }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "reverse" }}
          >
            <Link to={item.route} className="nav-sphere">{item.label}</Link>
          </motion.div>
        ))}
      </nav>
    </div>
  );
}

export default HomePage;
