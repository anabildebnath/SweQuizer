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
      <div className={classes.navChild}>
        <ul>
        <li>
            <NavLink to="/beta"   className={
                location.pathname === "/beta" ? classes.activeNavLink : ""
              }>
              <p className="navText">Test Records</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/beta">
              <p className="navText">Upcoming Tests</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tutorials"   className={
                location.pathname === "/tutorials" ? classes.activeNavLink : ""
              }>
              <p className="navText">Tutorials</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/faculties"   className={
                location.pathname === "/faculties" ? classes.activeNavLink : ""
              }>
              <p className="navText">Faculties</p>
            </NavLink>
          </li>
    
          <Account />
        </ul>
      </div>
    </nav>
  );
}
