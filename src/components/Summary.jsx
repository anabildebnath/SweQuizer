import { useMemo } from "react";
import successImage1 from "../assets/images/celebration1.svg";
import successImage2 from "../assets/images/celebration2.svg";
import sedImage from "../assets/images/sed.svg";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage1;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {/* {error && <div className={classes.badge}>An error occured!</div>} */}

      {!loading && !error && (
        <div className={classes.badge}>
          {score > 5 && score < 15 ? (
            <img src={image} alt="Success" />
          ) : score > 10 ? (
            <img src={successImage2} alt="Success" />
          ) : (
            <img src={sedImage} alt="Sed" />
          )}
        </div>
      )}
    </div>
  );
}
