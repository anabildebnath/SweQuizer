import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import "boxicons";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <ul className={classes.alignment}>
          <li>
            <Link to="/" className={classes.brand}>
              <box-icon
                type="solid"
                name="bar-chart-alt-2"
                color="white"
              ></box-icon>
              <h1>SweQuizer</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.navChild}>
        <ul>
          <li>Upcoming Tests</li>
          <li>Tutorials</li>
          <li>Results</li>
          <li>Contact Faculty</li>
          <Account />
        </ul>
      </div>
    </nav>
  );
}
