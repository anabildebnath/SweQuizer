import classes from "../styles/Description.module.css";
import computerImage from "../assets/images/computer.svg";
import studentMaleImage from "../assets/images/student-male.svg";
import studentFemaleImage from "../assets/images/student-female.svg";
import quizImage from "../assets/images/quiz.svg";
import cloudImage from "../assets/images/cloud.svg";
import webImage from "../assets/images/web.svg";
import { Link } from "react-router-dom";
import 'animate.css';

export default function Description() {
  return (
    <div className={classes.description}>
      <div className={classes.row}>
        <div className={classes.element}>
          <div className="animate__animated animate__backInLeft">
            <img src={quizImage} alt="" />
            <div className={classes.title}>
              <h1>Search all the Term-Tests</h1>
              <p>
                Always stay updated about upcoming the term tests posted by
                faculties. You can search for specific term tests with course,
                faculty or date queries.
              </p>

              <div className={classes.learnMore}>
                <Link to="/beta" target="_blank">
                  Learn More
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img src={computerImage} alt="" />
            <div className={classes.title}>
              <h1>Online computerized exams</h1>
              <p>
                Our user-friendly interface and intuitive design make it easy
                for students to navigate through the quizzes, track their
                progress, and review their results.
              </p>
              <div className={classes.learnMore}>
                <Link to="/login">Learn More</Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.element}>
          <div className="animate__animated animate__backInLeft">
            <img src={studentMaleImage} alt="" />
            <div className={classes.title}>
              <h1>Immediately see test results</h1>
              <p>
                Experience real-time feedback. Say goodbye to waiting anxiously
                for your test results. Receive your performance, including scores, correct answers.
              </p>

              <div className={classes.learnMore}>
                <Link
                  to="https://www.sust.edu/academics/schools"
                  target="_blank"
                >
                  Learn More
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img src={studentFemaleImage} alt="" />
            <div className={classes.title}>
              <h1>Contact faculties</h1>
              <p>
                Have questions or need clarification on any aspect of a test?
            Connect with our
                faculties today for assistance on any issues.
              </p>
              <div className={classes.learnMore}>
                <Link
                  to="https://www.sust.edu/institutes/iict/faculty"
                  target="_blank"
                >
                  Learn More
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.element}>
          <div className="animate__animated animate__backInLeft">
            <img src={cloudImage} alt="" />
            <div className={classes.title}>
              <h1>All your data is stored</h1>
              <p>
                All your data is securely stored within our system. So that you
                can retrive and look up to test data whenever necessary.
                Students can benifit by retriving critical past records.
              </p>
              <div className={classes.learnMore}>
                <Link
                  to="https://firebase.google.com/products/realtime-database#:~:text=The%20Firebase%20Realtime%20Database%20is,app%20data%20at%20global%20scale."
                  target="_blank"
                >
                  Learn More
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img src={webImage} alt="" />
            <div className={classes.title}>
              <h1>Learn about web and other technologies</h1>
              <p>
             Beginner friendly tutorials and quizes based on
                learnings from tutorials helps students grasp the fundamental
                topics.
              </p>
              <div className={classes.learnMore}>
                <Link to="https://www.apnacollege.in/" target="_blank">
                  Learn More
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
