import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
              <li className="menu-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'router-link-active menu-link' : 'menu-link'
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? 'router-link-active menu-link' : 'menu-link'
                  }
                  onClick={toggleMenu}
                >
                  Skills
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'router-link-active nav-link' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'router-link-active nav-link' : 'nav-link'
            }
          >
            Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
