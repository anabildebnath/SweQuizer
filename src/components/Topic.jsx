import { Link } from "react-router-dom";
import classes from "../styles/Topic.module.css";


export default function Topic({ topicName, image }) {
  return (
    <div className={classes.topicContainer}>
      <Link to={`/videos/${topicName}`} className={classes.topicLink}>
      <img src={image} alt="" />
        <h1>{topicName}</h1>
      </Link>
    </div>
  );
}
