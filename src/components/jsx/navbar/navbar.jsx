import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as TagName from "../../js/constants/constants.js";
import logo from "../../assets/images/gogixer.png";
import UserContext from "../../js/contexts/userContext";
import { useState, useContext } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const { currentUser, onLogout } = useContext(UserContext);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="Navigation">
      <div>
        <header className="Navbar">
          <a className="brandLogo" href="/#">
            <img src={logo} alt={TagName.COMPANY_NAME} />
          </a>

          <ul className={TagName.MENU_DEFAULT}>
            <li>
              {TagName.menus.map((m) => {
                return (
                  <NavLink to={m.path} key={m.name} tabindex="1">
                    {m.name}
                  </NavLink>
                );
              })}

              <NavLink
                to="/login"
                key="signin"
                id={currentUser.name.length === 0 ? "signin" : "hidden"}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                key="signup"
                id={currentUser.name.length === 0 ? "signup" : "hidden"}
              >
                Sign Up
              </NavLink>

              {currentUser.name && (
                <NavLink to="/" key="logout" id="logout" onClick={handleLogout}>
                  Logout
                </NavLink>
              )}
            </li>
          </ul>
          <div
            onClick={handleClicked}
            className={
              clicked ? TagName.HAMBURGER_OPEN : TagName.HAMBURGER_CLOSE
            }
          >
            <div className="hamburger_lines"></div>
          </div>
        </header>
      </div>
      <ul className={clicked ? TagName.MOBILE_OPEN : TagName.MOBILE_CLOSE}>
        <li>
          {TagName.menus.map((m) => {
            return (
              <Link to={m.path} key={m.name} onClick={handleClicked}>
                {m.name}
              </Link>
            );
          })}

          <Link to="/login" key="login" id="signin" onClick={handleClicked}>
            Sign In
          </Link>
          <Link to="/signup" key="signup" id="signup" onClick={handleClicked}>
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
