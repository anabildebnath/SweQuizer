import classes from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.element}>
        <h1 className={classes.title}>IICT</h1>
        <Link
          to="https://github.com/anabildebnath/SweQuizer/tree/master"
          target="_blank"
        >
          SWE Quiz App
        </Link>
      </div>
      <div className={classes.element}>
        <h1 className={classes.title}>Resources</h1>
        <Link to="" target="_blank">
          Blog
        </Link>
        <Link to="" target="_blank">
          Help Center
        </Link>
        <Link
          to="https://github.com/anabildebnath/SweQuizer/tree/master"
          target="_blank"
        >
          Release Notes
        </Link>
        <Link to="" target="_blank">
          Status
        </Link>
      </div>
      <div className={classes.element}>
        <h1 className={classes.title}>Community</h1>
        <p>IICT Official Website</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Sust Cultural Events</p>
      </div>
      <div className={classes.element}>
        <div>
          <h1 className={classes.title}>Developers</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
        </div>

        <div>
          <h1 className={classes.title}>Contact Us</h1>
          <p>anabildebnath16@gmail.com</p>
        </div>
      </div>
      <div className={classes.element}>
        <Link to="https://www.termsfeed.com/blog/website-copyright-law/" target="_blank">
          © Copyright 2024
        </Link>
        <Link to="https://anabildebnath.netlify.app/" target="_blank">
          Anabil Debnath
        </Link>
        <Link to="https://www.hostpapa.com/blog/business/a-website-owners-guide-to-copyright/" target="_blank">
          All rights reserved
        </Link>
      </div>
    </div>
  );
}
