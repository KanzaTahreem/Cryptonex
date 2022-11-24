import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <ul className="navlinks">
        <li className="navItem">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Coins
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>

);

export default Navbar;
