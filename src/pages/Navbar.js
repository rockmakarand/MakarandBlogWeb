import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           Blog Website
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/createpost"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Create Post 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/yourpost"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Your Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/liked"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Liked Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/account"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Account
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;