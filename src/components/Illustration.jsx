import React from "react";
import classes from "../styles/Illustration.module.css";
import SlidingBar from "./SlidingBar";

export default function Illustration() {
  return (
    <div className={classes.illustrationContainer}>
      <div className={classes.illustration}>
      <SlidingBar />
      </div>
      <div className={classes.illustrationTitle}>
        <h1>Connect with any account to get started</h1>
        <p>Get enrolled to participate in all the upcoming term tests</p>
      </div>
    </div>
  );
}
