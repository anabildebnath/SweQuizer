import { NavLink } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <ul className={classes.alignment}>
          <li>
            <NavLink exact to="/" className={classes.brand} activeClassName={classes.active}>
              <h1>SweQuizer</h1>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.navChild}>
        <ul>
          <li>
            <NavLink to="/term-tests" activeClassName={classes.active}>
              <p className="navText">Term Tests</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tutorials" activeClassName={classes.active}>
              <p className="navText">Tutorials</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/faculties" activeClassName={classes.active}>
              <p className="navText">Faculties</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/landing" activeClassName={classes.active}>
              <p className="navText">About</p>
            </NavLink>
          </li>
          <Account />
        </ul>
      </div>
    </nav>
  );
}
