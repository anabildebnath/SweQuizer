import React, { useEffect, useState } from "react";
import profileImage from "../assets/images/account logo.svg";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Profile.module.css";
import { UserProvider } from "../context/UserContext";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { NavLink, useLocation } from "react-router-dom";

export default function Profile() {
  const { currentUser } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const location = useLocation();
  // const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const db = getFirestore();
      const colRef = collection(db, "user");
      const q = query(colRef, where("Email", "==", currentUser.email));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          const userProfileData = { ...doc.data(), id: doc.id };
          setUserProfile(userProfileData);
          console.log("User Profile Data:", userProfileData);
        });
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  // Function to handle image upload
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0]; 
  //   setProfileImage(file); 
  // };

  if (!userProfile) {
    return <p>Loading...</p>;
  }

  return (
    <UserProvider>
      <div className={classes.profileContainer}>
        <div className={classes.profileMain}>
          <div className={classes.profileSidebar}>
            <ul>
              <li>
                <NavLink
                  to="/profile"
                  className={
                    location.pathname === "/profile"
                      ? classes.activeNavLink
                      : ""
                  }
                >
                  <p> My Profile</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/security"
                  className={
                    location.pathname === "/security"
                      ? classes.activeNavLink
                      : ""
                  }
                >
                  <p> Security</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/upcoming"
                  className={
                    location.pathname === "/upcoming"
                      ? classes.activeNavLink
                      : ""
                  }
                >
                  <p> Upcoming Tests</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/records"
                  className={
                    location.pathname === "/records"
                      ? classes.activeNavLink
                      : ""
                  }
                >
                  <p> Test Records</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notification"
                  className={
                    location.pathname === "/notification"
                      ? classes.activeNavLink
                      : ""
                  }
                >
                  <p> Notification</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/message"
                  className={
                    location.pathname === "/message"
                      ? classes.activeNavLink
                      : ""
                  }
                >
                  <p> Messages</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/delete"
                  className={
                    location.pathname === "/delete" ? classes.activeNavLink : ""
                  }
                >
                  <p> Delete Account</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={classes.profileMainbar}>
            <div className={classes.mainBar}>
              <h1>My Profile</h1>
               {/* Profile Image Upload */}
               {/* <div className={classes.profileImageUpload}>
                <input
                  type="file"
                  accept="image/*" // Allow only image files
                  onChange={handleImageUpload}
                />
              </div> */}
              <div className={classes.name}>
                {/* Display uploaded profile image */}
                {/* {profileImage && (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="profile pic"
                    className={classes.profileImage}
                  />
                )} */}
                <img src={profileImage} alt="" />
                <div className={classes.nameInfo}>
                  <h3>{currentUser.displayName}</h3>
                  <p>{userProfile.Sem}th semester student</p>
                </div>
              </div>
              <div className={classes.personalInfo}>
                <h3>Personal Information</h3>
                <div className={classes.row}>
                  <p>Student's name: </p>
                  <p>{userProfile.Name}</p>
                </div>

                <div className={classes.row}>
                  <p>Registration number: </p>
                  <p>{userProfile.Reg}</p>
                </div>
                <div className={classes.row}>
                  <p>Batch: </p>
                  <p>{userProfile.Batch}</p>
                </div>
                <div className={classes.row}>
                  <p>Semester: </p>
                  <p>{userProfile.Sem}</p>
                </div>
              </div>
              <div className={classes.address}>
                <h3>Additional Information</h3>
                <div className={classes.row}>
                  <p>Email address: </p>
                  <p>{currentUser.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
