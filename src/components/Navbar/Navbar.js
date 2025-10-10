import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { FiMenu, FiX, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Business Consulting', path: '/services#consulting' },
        { name: 'Digital Marketing', path: '/services#marketing' },
        { name: 'Web Development', path: '/services#development' },
        { name: 'Growth Strategy', path: '/services#strategy' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span className="logo-text">GrowMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-only">
            {navItems.map((item) => (
              <div key={item.name} className="nav-item-wrapper">
                {item.hasDropdown ? (
                  <div 
                    className="nav-item dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link 
                      to={item.path}
                      className={`nav-item-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.name}
                      <FiChevronDown className="dropdown-icon" />
                    </Link>
                    {dropdownOpen && (
                      <div className="dropdown-menu">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="dropdown-item"
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-item-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side controls */}
          <div className="navbar-controls">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>

            {/* Admin Link (discrete) */}
            <Link 
              to="/admin/services" 
              className="admin-link"
              title="Admin Panel"
            >
              ⚙️
            </Link>

            {/* CTA Button */}
            <Link to="/contact" className="btn btn-primary btn-sm desktop-only">
              Get Started
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="mobile-menu-toggle mobile-only"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <div key={item.name} className="mobile-nav-item">
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="mobile-dropdown">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="mobile-dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn btn-primary mobile-cta" onClick={closeMobileMenu}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;