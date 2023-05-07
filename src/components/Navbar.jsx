import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { BiTrendingUp } from 'react-icons/bi';
import { ImHome } from 'react-icons/im';

const Navbar = () => (
  <section className="navbar-container">
    <nav className="navbar">
      <ul className="navlinks" data-testid="navlinks">
        <li className="navItem">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            <ImHome />
            Home
          </NavLink>
        </li>

        <li className="navItem">
          <NavLink
            to="/currencies"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            <FaCoins />
            Currencies
          </NavLink>
        </li>

        <li className="navItem">
          <NavLink
            to="/trending-currencies"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            <BiTrendingUp />
            Trending
          </NavLink>
        </li>
      </ul>
    </nav>
  </section>

);

export default Navbar;
