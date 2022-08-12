import { useState } from 'react';
import './nav.module.scss';
import './nav.scss';

/* eslint-disable-next-line */
export interface NavProps {}

const Nav: React.FC<NavProps> = (props: NavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="cv-navbar">
      <img src="/assets/images/logo.png" alt="logo" className="logo" />
      {!menuOpen ? (
        <button
          type="button"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      ) : (
        <div className="menu">
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <div className="menu-container">
            <ul className="menu-items">
              <a href="#about" className="menu-link" onClick={toggleMenu}>
                <li className="menu-item">About</li>
              </a>
              <a
                href="#employment-history"
                className="menu-link"
                onClick={toggleMenu}
              >
                <li className="menu-item">Employment History</li>
              </a>
            </ul>
          </div>
        </div>
      )}
      <ul className="nav-items">
        <a href="#about" className="nav-link">
          <li className="nav-item">About</li>
        </a>
        <a href="#employment-history" className="nav-link">
          <li className="nav-item">Employment History</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
