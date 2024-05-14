import classes from "../styles/Beta.module.css";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
export default function Beta() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondDiv(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={classes.beta}>
      <div className={classes.container}>
        <div className={classes.typedOut}>
          <h1> Currently on BETA mode, working on upgrading this feature.</h1>
        </div>
      </div>

      {showSecondDiv && (
        <div className={classes.container}>
          <div className={classes.typedOut}>
            <h1>Checkout my github for updates: <Link to="https://github.com/anabildebnath/SweQuizer/commits/master/" target="_blank">SweQuizer</Link></h1>
          </div>
        </div>
      )}
    </div>
  );
}
