import { NavLink, useLocation } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <ul className={classes.alignment}>
          <li>
            <NavLink exact to="/" className={classes.brand}>
              <h1>SweQuizer</h1>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`${classes.navChild} ${classes.privateNav}`}>
        <ul>
          <li>
            <NavLink
              to="/beta"
              className={
                location.pathname === "/beta" ? classes.activeNavLink : ""
              }
            >
              Test Records
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test"
              className={
                location.pathname === "/test" ? classes.activeNavLink : ""
              }
            >
              Upcoming Tests
            </NavLink>
          </li>
          <li>
            <span className={classes.sp}>
              <NavLink
                to="/tutorials"
                className={
                  location.pathname === "/tutorials"
                    ? classes.activeNavLink
                    : ""
                }
              >
                Tutorials
              </NavLink>
            </span>
          </li>
          <li>
            <span className={classes.sp}>
              <NavLink
                to="/faculties"
                className={
                  location.pathname === "/faculties"
                    ? classes.activeNavLink
                    : ""
                }
              >
                Faculties
              </NavLink>
            </span>
          </li>
          <Account />
        </ul>
      </div>
    </nav>
  );
}
