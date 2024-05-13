import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import githubImage from "../assets/images/github.svg";
import googleImage from "../assets/images/google.png";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/SignupForm.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { useUser } from "../context/UserContext";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [reg, setRegistrationNo] = useState("");
  const [batch, setBatch] = useState("");
  const [sem, setSemester] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [socialLoginClicked, setSocialLoginClicked] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const { setUserData } = useUser();


  // Here is the function for handling google direct popup login
  async function handleGoogleSignIn() {
    try {
      setError("");
      setLoading(true);
      setSocialLoginClicked(true);
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login with Google!");
    }
  }

  // Here is the function for handling github direct popup login
  async function handleGithubSignIn() {
    try {
      setError("");
      setLoading(true);
      setSocialLoginClicked(true);
      await signInWithPopup(auth, githubProvider);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login with GitHub!");
    }
  }

  //Firestore data adding
  const db = getFirestore();
  const colRef = collection(db, "user");


 

  async function handleSubmit(e) {
    e.preventDefault();

    if(!socialLoginClicked)
      {
            if (password !== confirmPassword) {
      return setError("Passwords don't match!");
      // setError("Passwords don't match!");
      // return;
    }

    try {
      setError("");
      setLoading(true);

      // Add user data to Firestore and get the document ID
      const docRef = await addDoc(colRef, {
        Name: username,
        Email: email,
        Batch: batch,
        Reg: reg,
        Sem: sem,
      });

      // Now, docRef.id contains the unique document ID
      const newUserId = docRef.id;
      // console.log("New User Document ID:", newUserId);

      // Fetch additional data specific to the document ID
      const userDoc = await getDoc(doc(colRef, newUserId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserData(userData);
        // console.log("User Data:", userData);
      } else {
        // console.log("No such document!");
      }

      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
      }


  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className={classes.formContainer}>
        <div className={classes.loginHeader}>
          <div className={classes.headerName}>
            <h1>Signup to create your Account</h1>
          </div>
          <div className={classes.headerAccounts}>
            <div className={classes.accountButton}>
              <img src={googleImage} alt="" />
           <button type="button" onClick={handleGoogleSignIn}>
              Google{" "}
            </button>
            </div>
            <div className={classes.accountButton}>
              <img src={githubImage} alt="" />
              <button type="button" onClick={handleGithubSignIn}>
              Github
            </button>
            </div>
          </div>
          <div className={classes.separator}>
            <span className={classes.separator_text}>
              or continue with your email
            </span>
          </div>
        </div>

        <div className={classes.loginInput}>
          <TextInput
            name="User"
            type="text"
            placeholder="Enter name"
            icon="person"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextInput
            name="Email"
            type="text"
            required
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            name="Reg"
            type="number"
            required
            placeholder="Enter regestraton number"
            icon="alternate_email"
            value={reg}
            onChange={(e) => setRegistrationNo(e.target.value)}
          />
          <TextInput
            name="Batch"
            type="number"
            required
            placeholder="Enter your batch year"
            icon="alternate_email"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
          <TextInput
            name="Sem"
            type="number"
            required
            placeholder="Enter you current semester"
            icon="alternate_email"
            value={sem}
            onChange={(e) => setSemester(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Confirm password"
            icon="lock_clock"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Checkbox
            className={classes.checkbox}
            required
            text="I agree to the Terms &amp; Conditions"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          <div className={classes.lowersec}>
            <Button disabled={loading} type="submit">
              <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
