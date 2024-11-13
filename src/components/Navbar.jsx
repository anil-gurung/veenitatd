import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import './navbar.css';
import logo from '../assets/taradevilogo.jfif';
import { useState } from 'react';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav_toggle_btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <IoMdClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
