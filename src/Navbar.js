import React, { useState, useRef, useEffect } from "react";
import './Navbar.css';

const menuItems = [
  'Start Here',
  'Courses',
  'FAQ',
  'Projects',
  'Join Us',
  'Resources',
  'Contact',
];

const Navbar = ({ noBg = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);

  const moveIndicator = (index) => {
    const activeItem = itemRefs.current[index];
    const container = containerRef.current;
    const indicator = indicatorRef.current;

    if (!activeItem || !container || !indicator) return;

    const activeRect = activeItem.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const indicatorLeft = activeRect.left - containerRect.left;
    const indicatorWidth = activeRect.width;

    container.style.setProperty('--indicator-left', `${indicatorLeft}px`);
    container.style.setProperty('--indicator-width', `${indicatorWidth}px`);
  };

  useEffect(() => {
    moveIndicator(activeIndex);
    const handleResize = () => moveIndicator(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navMarkup = (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#GK_NEXERGY" className="navbar-logo" aria-label="GK NEXERGY">
          {/* Logo placeholder */}
        </a>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          ☰
        </button>

        <div className={`nav-links-wrapper ${menuOpen ? 'open' : ''}`}>
          <ul ref={containerRef} className="nav-center">
            <div ref={indicatorRef} className="nav-indicator"></div>
            {menuItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => {
                  setActiveIndex(index);
                  setMenuOpen(false);
                }}
              >
                <a href={`/${item.replace(/\s+/g, '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );

  return noBg ? navMarkup : <div className="bg">{navMarkup}</div>;
};

export default Navbar;
