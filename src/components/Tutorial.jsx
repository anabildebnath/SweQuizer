import classes from "../styles/Tutorial.module.css";
import html from "../assets/images/html.jpg";
import mongo from "../assets/images/mongo.jpg";
import git from "../assets/images/git.jpg";
import js from "../assets/images/js.jpg";
import python from "../assets/images/python.jpg";
import aws from "../assets/images/aws.jpg";
import c from "../assets/images/c++.jpg";
import react from "../assets/images/react.jpg";
import node from "../assets/images/node.jpg";
import sql from "../assets/images/sql.jpg";
import "animate.css";
import {Link} from "react-router-dom";

export default function Tutorial() {
  return (
    <div className={classes.tutorialContainer}>
      <div className={classes.tutorial}>
        <div className="animate__animated animate__bounce">
          <h1>Html</h1>
          <Link to="https://youtu.be/HcOc7P5BMi4?si=hY8FJV6BNIm7YnjN" target="_blank">
            <img src={html} alt="" />  
          </Link>
        
        </div>
      </div>
      <div className={classes.tutorial}>
        <div className="animate__animated animate__bounce">
          <h1>C++</h1>
          <Link to="https://youtu.be/8jLOx1hD3_o?si=qAanzuNStL0s_nBh" target="_blank">
             <img src={c} alt="" /> 
          </Link>
        
        </div>
      </div>
      <div className={classes.tutorial}>
        <div className="animate__animated animate__bounce">
          <h1>JavaScript</h1>
          <img src={js} alt="" />
        </div>
      </div>
      <div className={classes.tutorial}>
        <div className="animate__animated animate__bounce">
          {" "}
          <h1>Git & Github</h1>
          <img src={git} alt="" />
        </div>
      </div>
      <div className={classes.tutorial}>
        <div className="animate__animated animate__bounce">
          {" "}
          <h1>React.js</h1>
          <img src={react} alt="" />
        </div>
      </div>
      <div className={classes.tutorial}>
        <div className="animate__animated animate__bounce">
          {" "}
          <h1>Node.js</h1>
          <img src={node} alt="" />
        </div>
      </div>
      <div className={classes.tutorial}>
        <h1>MySql</h1>
        <img src={sql} alt="" />
      </div>
      <div className={classes.tutorial}>
        <h1>Python</h1>
        <img src={python} alt="" />
      </div>
      <div className={classes.tutorial}>
        <h1>MongoDB</h1>
        <img src={mongo} alt="" />
      </div>
      <div className={classes.tutorial}>
        <h1>AWS</h1>
        <img src={aws} alt="" />
      </div>
    </div>
  );
}
