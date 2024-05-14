import { NavLink, useLocation } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <ul>
          <li>
            <NavLink exact to="/">
              <h1>SweQuizer</h1>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`${classes.navChild} ${classes.publicNav}`}>
        <ul>
          <li>
            <NavLink
              to="/beta"
              className={
                location.pathname === "/beta" ? classes.activeNavLink : ""
              }
            >
              Notices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faculties"
              className={
                location.pathname === "/faculties" ? classes.activeNavLink : ""
              }
            >
              Faculties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={
                location.pathname === "/about" ? classes.activeNavLink : ""
              }
            >
              About
            </NavLink>
          </li>
          <Account />
        </ul>
      </div>
    </nav>
  );
}
