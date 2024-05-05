import classes from "../styles/Home.module.css";
import Topic from "../components/Topic";
import arrayImage from "../assets/images/arrays.webp"
import sortImage from "../assets/images/sort.jpg"
import stringImage from "../assets/images/string.jpg"
import bitImage from "../assets/images/bit.webp"
import linkedImage from "../assets/images/linked.png"
import recursionImage from "../assets/images/recursion.png"

export default function Home() {
  return (
    <div className={classes.alignment}>
      <div>
        <Topic topicName="Array" image={arrayImage}/>
      </div>
      <div>
        <Topic topicName="String"  image={stringImage}/>
      </div>
      <div>
        <Topic topicName="Sort" image={sortImage} />
      </div>
      <div>
        <Topic topicName="Recursion" image={recursionImage}/>
      </div>
      <div>
        <Topic topicName="Bit Manipulation" image={bitImage}/>
      </div>
      <div>
        <Topic topicName="Linked List" image={linkedImage}/>
      </div>
    </div>
  );
}
