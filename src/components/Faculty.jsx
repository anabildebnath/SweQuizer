import classes from "../styles/Faculty.module.css";

import { Link } from "react-router-dom";
import "animate.css";

export default function Faculty() {
  return (
    <div className={classes.description}>
      <div className={classes.row}>
        <div className={classes.element}>
          <div className="animate__animated animate__backInLeft">
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1609733596.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Prof M. Jahirul Islam, PhD., PEng.</h1>
              <h4> Director</h4>
              <p>
                Contact Information: Phone: +880-821- 713850/ 714479/ 717850
                Ext. 671 (O), +880-821-726695 (H), +8801770348185 <br /> Email:
                jahir-cse@sust.edu
              </p>

              <div className={classes.learnMore}>
                <Link to="https://www.sust.edu/institutes/iict/faculty-detail/3" target="_blank">
                  For more info
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1541422371.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Dr. Ahsan Habib.</h1>
              <h4> Associate Professor</h4>
              <p>
                Contact Information: <br /> Phone: 01915796886 Email:
                ahabib-iict@sust.edu
              </p>
              <div className={classes.learnMore}>
                <Link to="https://www.sust.edu/institutes/iict/faculty-detail/17" target="_blank">For more info</Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.element}>
          <div className="animate__animated animate__backInLeft">
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1463005132.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Ms Sayma Sultana Chowdhury</h1>
              <h4>Assistant Professor</h4>
              <p>
                Contact Information: Phone: 01920919869 Email:
                sayma-iict@sust.edu
              </p>

              <div className={classes.learnMore}>
                <Link
                  to="https://www.sust.edu/institutes/iict/faculty-detail/4"
                  target="_blank"
                >
                  For more info
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1463005213.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Asif Mohammed Samir</h1>
              <h4>Assistant Professor</h4>
              <p>Contact Information: Email: asifsamir-iict@sust.edu</p>
              <div className={classes.learnMore}>
                <Link
                  to="https://www.sust.edu/institutes/iict/faculty-detail/5"
                  target="_blank"
                >
                  For more info
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
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1541423471.JPG"
              alt=""
            />
            <div className={classes.title}>
              <h1>Quazi Ishtiaque Mahmud</h1>
              <h4>Assistant Professor</h4>
              <p>Contact Information: Email: mahmud-iict@sust.edu</p>
              <div className={classes.learnMore}>
                <Link
                  to="https://www.sust.edu/institutes/iict/faculty-detail/18"
                  target="_blank"
                >
                  For more info
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1551902305.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Fazle Mohammed Tawsif</h1>
              <h4>Assistant Professor</h4>
              <p>
                Contact Information: Phone: 01841857838 Email:
                tawsif-iict@sust.edu
              </p>
              <div className={classes.learnMore}>
                <Link to="https://www.sust.edu/institutes/iict/faculty-detail/21" target="_blank">
                  For more info
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
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1669135307.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Lecturer Mohammed Raihan Ullah</h1>
              <h4>Lecturer</h4>
              <p>
                Lecturer Mohammed Raihan Ullah Lecturer Contact Information:
                Phone: 01852606036 Email: raihan-iict@sust.edu
              </p>
              <div className={classes.learnMore}>
                <Link
                  to="https://www.sust.edu/institutes/iict/faculty-detail/33"
                  target="_blank"
                >
                  For more info
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1660923518.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Partha Protim Paul</h1>
              <h4>Lecturer</h4>
              <p>
                Contact Information: Phone: +8801701001168 Email:
                partha-iict@sust.edu
              </p>
              <div className={classes.learnMore}>
                <Link to="https://www.sust.edu/institutes/iict/faculty-detail/34" target="_blank">
                  For more info
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
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1700578720.jpg"
              alt=""
            />
            <div className={classes.title}>
              <h1>Lecturer Mahfuzur Rahman Emon</h1>
              <h4>Lecturer</h4>
              <p>
                Contact Information: Phone: 01521702334 Email:
                emon-iict@sust.edu
              </p>
              <div className={classes.learnMore}>
                <Link
                  to="https://www.sust.edu/institutes/iict/faculty-detail/41"
                  target="_blank"
                >
                  For more info
                </Link>
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.element}>
          <div className="animate__animated animate__backInRight">
            <img
              src="https://www.sust.edu/uploads/profile-images/institute-office-1707044486.png"
              alt=""
            />
            <div className={classes.title}>
              <h1>Fazle Rabbi Rakib</h1>
              <h4>Lecturer</h4>
              <p>
                Contact Information: Phone: 01521560213 Email:
                rakib-iict@sust.edu
              </p>
              <div className={classes.learnMore}>
                <Link to="https://www.sust.edu/institutes/iict/faculty-detail/40" target="_blank">
                  For more info
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
