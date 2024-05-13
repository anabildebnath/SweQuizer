import React from "react";
import profileImage from "../assets/images/account logo.svg";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Profile.module.css";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { currentUser } = useAuth();
  const { userData } = useUser();
  console.log("User Data:", userData);

  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileMain}>
        <div className={classes.profileSidebar}>
          <ul>
            <li>My Profile</li>
            <li>Security</li>
            <li>Upcoming Tests</li>
            <li>Test Records</li>
            <li>Notification</li>
            <li>Messages</li>
            <li>Delete Account</li>
          </ul>
        </div>
        <div className={classes.profileMainbar}>
          {currentUser ? (
            <div className={classes.mainBar}>
              <h1>My Profile</h1>
              <div className={classes.name}>
                <img src={profileImage} alt="profile pic" />{" "}
                <div className={classes.nameInfo}>
                  <h3>{currentUser.displayName}</h3>
                </div>
              </div>
              <div className={classes.personalInfo}>
                <h3>Personal Information</h3>

                <div className={classes.row}>
                  <p>Registration number: {userData.Reg}</p>
                </div>
                <div className={classes.row}>
                  <p>Batch: {userData.Batch}</p>
                </div>
                <div className={classes.row}>
                  <p>Semester: {userData.Sem}</p>
                </div>

                <div className={classes.row}>
                  <p>Email address: {currentUser.email}</p>
                </div>
              </div>
              <div className={classes.address}></div>
            </div>
          ) : (
            <p>No user logged in</p>
          )}
        </div>
      </div>
    </div>
  );
}
