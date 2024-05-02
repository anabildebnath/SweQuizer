import classes from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.element}>
        <h1 className={classes.title}>IICT</h1>
        <p>SWE Quiz App</p>
      </div>
      <div className={classes.element}>
        <h1 className={classes.title}>Resources</h1>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
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
        <img src="" alt="" />
        <p>© Copyright 2022</p>
        <p>IICT Web Apps Design Inc.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}
