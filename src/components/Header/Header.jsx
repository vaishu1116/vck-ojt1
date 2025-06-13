import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Header.css';
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return(
         <header className='header'>
            <nav className="d-none d-md-flex">
                <h2>Vivekanand  College</h2>
                <Link to="/home"><b>Home</b></Link>
                <Link to="/aboutpage"><b>About</b></Link>
                <Link to="/coursespage"><b>Courses</b></Link>
                <Link to="/contactpage"><b>Contact</b></Link>
                <button><Link to="/admissionspage">Apply Now!</Link></button>
            </nav>

            {/* Mobile Hamburger Button */}
      <button className="hamburger-menu d-md-none" onClick={toggleDrawer}>        
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      {/* Mobile Drawer Navigation */}
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
        <Link to="/" className="nav-item" onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/aboutpage" className="nav-item" onClick={closeDrawer}>
          About
        </Link>
        <Link to="/coursespage" className="nav-item" onClick={closeDrawer}>
          Courses
        </Link>
        <Link to="/contactpage" className="nav-item" onClick={closeDrawer}>
          Contact
        </Link>
        <Link
          to="/admissionspage"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
       {/* Overlay when drawer is open */}
       {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
    </header>
  )
}

export default Header
       