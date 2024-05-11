import "animate.css";
import { useEffect, useState } from "react";
import arrayImage from "../assets/images/arrays.webp";
import bitImage from "../assets/images/bit.webp";
import linkedImage from "../assets/images/linked.png";
import recursionImage from "../assets/images/recursion.png";
import sortImage from "../assets/images/sort.jpg";
import stringImage from "../assets/images/string.jpg";
import Footer from "../components/Footer";
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
    <>
      <div className={classes.alignment}>
        <div className={classes.introSection1}>
          <div>
            <h1
              className={`${classes.introH1} ${
                showHeader ? classes.fadeIn : ""
              }`}
            >
              Quiz Topic Lists
            </h1>
            <div className={classes.animate}>
              <h1 className="animate__animated animate__bounce">
                Go through all the topics
              </h1>
            </div>
          </div>
          <div className={classes.animate}>
            <h1 class="animate__animated animate__fadeInDown">
              And choose your quiz topic.
            </h1>
          </div>
          <div>
            <p className={classes.introP}>
              Welcome to the quiz app, choose your topic list.
            </p>
          </div>
        </div>
        <div className={classes.introSection2}></div>

        <div className={classes.topicSection}>
          <div>
            <Topic
              topicName="Array"
              image={arrayImage}
              topicDescription="9 Array videos with 9 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#2B7180"
            />
          </div>
          <div>
            <Topic
              topicName="String"
              image={stringImage}
              topicDescription="2 String videos with 2 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#88B6A1"
            />
          </div>
          <div>
            <Topic
              topicName="Sort"
              image={sortImage}
              topicDescription="2  Sorting Algorithm videos with 2 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#F0B673"
            />
          </div>
          <div>
            <Topic
              topicName="Recursion"
              image={recursionImage}
              topicDescription="5 Recursion videos with 5 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#BCD3C7"
            />
          </div>
          <div>
            <Topic
              topicName="Bit Manipulation"
              image={bitImage}
              topicDescription="3 Bit Operation videos with 3 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#88B6A1"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#88B6A1"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#BCD3C7"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#F0B673"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#2B7180"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#F0B673"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#2B7180"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#BCD3C7"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#88B6A1"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#F0B673"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#2B7180"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#F0B673"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#88B6A1"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#2B7180"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#F0B673"
            />
          </div>
          <div>
            <Topic
              topicName="Linked List"
              image={linkedImage}
              topicDescription="10 Linked List videos with 10 quiz tests, each quiz has in total 4 questions and every question is of 5 marks."
              bgColor="#BCD3C7"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
