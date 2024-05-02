import React, { useState } from "react";
import classes from "../styles/Search.module.css";
import "boxicons";
import image from "../assets/images/search svg.svg";

export default function Search() {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div className={classes.search}>
      <h1>Search upcoming term tests</h1>
      <div
        className={`${classes.searchBox} ${
          isInputFocused ? classes.focused : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search upcoming term tests"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <box-icon name="search"></box-icon>
      </div>

      <img src={image} alt="search_image" />
    </div>
  );
}
