import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import "boxicons";

export default function Nav() {
  return (
    <nav className={classes.nav}>
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
      <Account />
    </nav>
  );
}
