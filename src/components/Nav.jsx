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
              <h1>SweQuizer</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.navChild}>
        <ul>
          <li>
            <Link>
              <p className="navText">Term Tests</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className="navText">Tutorials</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className="navText">Results</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className="navText">Faculties</p>
            </Link>
          </li>
  
          <Account />
        </ul>
      </div>
    </nav>
  );
}
