import React, { Component } from "react";
import state1Image from "../assets/images/welcome.svg";
import state2Image from "../assets/images/login.svg";
import state3Image from "../assets/images/signup.svg";
import classes from "../styles/SlidingBar.module.css";

class SlidingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        activeIndex: (prevState.activeIndex + 1) % 3,
      }));
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={classes.slidingBarContainer}>
        {this.state.activeIndex === 0 && (
          <div className={`${classes.sliding_bar} ${classes.active}`}>
            <img src={state1Image} alt="" />
          </div>
        )}
        {this.state.activeIndex === 1 && (
          <div className={`${classes.sliding_bar} ${classes.active}`}>
            <img src={state2Image} alt="" />
          </div>
        )}
        {this.state.activeIndex === 2 && (
          <div className={`${classes.sliding_bar} ${classes.active}`}>
            <img src={state3Image} alt="" />
          </div>
        )}
      </div>
    );
  }
}

export default SlidingBar;
