import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";

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
        <Link
          to="https://medium.com/@anabildebnath16/swequizer-documentation-e79044d367a2"
          target="_blank"
        >
          Blog
        </Link>
        <Link to="https://www.linkedin.com/in/anabildebnath/" target="_blank">
          Help Center
        </Link>
        <Link
          to="https://github.com/anabildebnath/SweQuizer/commits/master/"
          target="_blank"
        >
          Release Notes
        </Link>
        <Link to="/beta" target="_blank">
          Status
        </Link>
      </div>
      <div className={classes.element}>
        <h1 className={classes.title}>Community</h1>

        <Link to=" http://iict.sust.edu/" target="_blank">
          IICT Official Website
        </Link>
        <Link to="https://twitter.com/sustccofficial" target="_blank">
          Twitter
        </Link>
        <Link
          to="https://www.linkedin.com/school/shah-jalal-university-of-science-and-technology/"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link to="https://github.com/sust-swe" target="_blank">
          Github
        </Link>
        <Link to="https://www.sust.edu/campus-life/cultural" target="_blank">
          Sust Cultural Events
        </Link>
      </div>
      <div className={classes.element}>
        <div className={classes.element}>
          <h1 className={classes.title}>Developer</h1>
          <Link to="https://anabildebnath.netlify.app/" target="_blank">
            About Me
          </Link>

          <Link to="https://github.com/anabildebnath" target="_blank">
            Github
          </Link>
        </div>

        <div className={classes.element}>
          <h1 className={classes.title}>Contact Me</h1>
          <p>anabildebnath16@gmail.com</p>
          <Link to="https://github.com/anabildebnath" target="_blank">
            Portfolio Website
          </Link>
          <Link to="https://www.linkedin.com/in/anabildebnath/" target="_blank">
            LinkedIn
          </Link>
          <Link to="https://www.instagram.com/anabildebnathabir/" target="_blank">
            Instagram
          </Link>
        </div>
      </div>
      <div className={classes.element}>
        <Link
          to="https://www.termsfeed.com/blog/website-copyright-law/"
          target="_blank"
        >
          © Copyright 2024
        </Link>
        <Link to="https://anabildebnath.netlify.app/" target="_blank">
          Anabil Debnath
        </Link>
        <Link
          to="https://www.hostpapa.com/blog/business/a-website-owners-guide-to-copyright/"
          target="_blank"
        >
          All rights reserved
        </Link>
      </div>
    </div>
  );
}
