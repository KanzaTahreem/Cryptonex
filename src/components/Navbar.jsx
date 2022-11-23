import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <header>
    <h1 className="title">Premiere League</h1>
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
  </header>

);

export default Navbar;
