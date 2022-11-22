import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

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
            Teams
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="players"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Players
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="standings"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Standings
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="topscores"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Top Scorers
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="trophies"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Trophies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>

);

export default Navbar;
