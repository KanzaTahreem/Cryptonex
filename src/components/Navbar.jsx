import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { BiTrendingUp } from 'react-icons/bi';
import { ImHome } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <section className="navbar-container">
      <nav className="navbar">
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <RiCloseFill className="cross-icon" />
          ) : (
            <GiHamburgerMenu className="hamburger" />
          )}
        </div>
        <ul className={`navlinks ${isMobileMenuOpen ? 'show' : 'hide'}`} data-testid="navlinks">
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
};

export default Navbar;
