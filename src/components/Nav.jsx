import "boxicons";
import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

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
          <li>
            <Link>
              <p>Term Tests</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>Tutorials</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>Results</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>Contact Faculty</p>
            </Link>
          </li>
  
          <Account />
        </ul>
      </div>
    </nav>
  );
}
