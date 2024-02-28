import React, { useState } from "react";

import logo from "../../assets/lg.png";
import { Link, useAsyncError } from "react-router-dom";

import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME ",
    to: "/about",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className='navbar'>
        <div className='nav_container'>
          <Link to={"/"} className='navbar_container_logo'>
            <img style={{ width: "50px" }} src={logo} alt='' />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className='navbar_container_menu_item'>
              <Link className='navbar_container_menu_item_links' to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
