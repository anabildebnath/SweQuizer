import classes from "../styles/About.module.css";
import computerImage from "../assets/images/computer.svg";
import studentMaleImage from "../assets/images/student-male.svg";
import studentFemaleImage from "../assets/images/student-female.svg";
import quizImage from "../assets/images/quiz.svg";
import cloudImage from "../assets/images/cloud.svg";
import webImage from "../assets/images/web.svg";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.row}>
        <div className={classes.element}>
          <img src={quizImage} alt="" />
          <div className={classes.title}>
            <h1>Branchs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ullam, beatae modi atque qui veritatis consequuntur laboriosam
              expedita omnis corrupti repellendus perferendis recusandae dolorem
              dicta vero? Animi quis natus perferendis!
            </p>

            <div className={classes.learnMore}>
              <a href="/">Learn More</a>
              <box-icon name="right-arrow-alt" color="azure"></box-icon>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <img src={computerImage} alt="" />
          <div className={classes.title}>
            <h1>Branchs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ullam, beatae modi atque qui veritatis consequuntur laboriosam
              expedita omnis corrupti repellendus perferendis recusandae dolorem
              dicta vero? Animi quis natus perferendis!
            </p>
            <div className={classes.learnMore}>
              <a href="/">Learn More</a>
              <box-icon name="right-arrow-alt" color="blue"></box-icon>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.element}>
          <img src={studentMaleImage} alt="" />
          <div className={classes.title}>
            <h1>Branchs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ullam, beatae modi atque qui veritatis consequuntur laboriosam
              expedita omnis corrupti repellendus perferendis recusandae dolorem
              dicta vero? Animi quis natus perferendis!
            </p>

            <div className={classes.learnMore}>
              <a href="/">Learn More</a>
              <box-icon name="right-arrow-alt"></box-icon>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <img src={studentFemaleImage} alt="" />
          <div className={classes.title}>
            <h1>Branchs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ullam, beatae modi atque qui veritatis consequuntur laboriosam
              expedita omnis corrupti repellendus perferendis recusandae dolorem
              dicta vero? Animi quis natus perferendis!
            </p>
            <div className={classes.learnMore}>
              <a href="/">Learn More</a>
              <box-icon name="right-arrow-alt"></box-icon>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.element}>
          <img src={cloudImage} alt="" />
          <div className={classes.title}>
            <h1>Branchs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ullam, beatae modi atque qui veritatis consequuntur laboriosam
              expedita omnis corrupti repellendus perferendis recusandae dolorem
              dicta vero? Animi quis natus perferendis!
            </p>
            <div className={classes.learnMore}>
              <a href="/">Learn More</a>
              <box-icon name="right-arrow-alt"></box-icon>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <img src={webImage} alt="" />
          <div className={classes.title}>
            <h1>Branchs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              ullam, beatae modi atque qui veritatis consequuntur laboriosam
              expedita omnis corrupti repellendus perferendis recusandae dolorem
              dicta vero? Animi quis natus perferendis!
            </p>
            <div className={classes.learnMore}>
              <a href="/">Learn More</a>
              <box-icon name="right-arrow-alt"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
