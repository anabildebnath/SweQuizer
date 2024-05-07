import "animate.css";
import { useEffect, useState } from "react";
import arrayImage from "../assets/images/arrays.webp";
import bitImage from "../assets/images/bit.webp";
import linkedImage from "../assets/images/linked.png";
import recursionImage from "../assets/images/recursion.png";
import sortImage from "../assets/images/sort.jpg";
import stringImage from "../assets/images/string.jpg";
import Topic from "../components/Topic";
import classes from "../styles/Home.module.css";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // After a delay of 500ms (.1 second), set showHeader to true
    const timeout = setTimeout(() => {
      setShowHeader(true);
    }, 800);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <div className={classes.alignment}>
      <div className={classes.introSection1}>
        <div>
          <h1
            className={`${classes.introH1} ${showHeader ? classes.fadeIn : ""}`}
          >
            G Insights
          </h1>
          <div className={classes.animate}>
               <h1 className="animate__animated animate__bounce">
            An animated element
          </h1>
          </div>
       
        </div>
        <div className={classes.animate}>
          <h1 class="animate__animated animate__fadeInDown">
            Practical insights to help you win.
          </h1>
        </div>
        <div>
          <p className={classes.introP}>
            Welcome to our ever-growing collection of expert resources! This is
            not a passive blog. Lookout for downloadable playbooks, interactive
            videos, and other tools to help you do the actual work of finding
            product-market fit and raising capital.
          </p>
        </div>
      </div>
      <div className={classes.introSection2}></div>

      <div className={classes.topicSection}>
        <div>
          <Topic topicName="Array" image={arrayImage} />
        </div>
        <div>
          <Topic topicName="String" image={stringImage} />
        </div>
        <div>
          <Topic topicName="Sort" image={sortImage} />
        </div>
        <div>
          <Topic topicName="Recursion" image={recursionImage} />
        </div>
        <div>
          <Topic topicName="Bit Manipulation" image={bitImage} />
        </div>
        <div>
          <Topic topicName="Linked List" image={linkedImage} />
        </div>
      </div>
    </div>
  );
}
