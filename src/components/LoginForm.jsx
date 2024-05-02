import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import classes from "../styles/LoginForm.module.css";
import companyImage from "../assets/images/company logo.svg";
import googleImage from "../assets/images/google.png";
import githubImage from "../assets/images/github.svg";
import { auth } from "../firebase";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  async function handleGoogleSignIn() {
    try {
      setError("");
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);

      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login with Google!");
    }
  }

  async function handleGithubSignIn() {
    try {
      setError("");
      setLoading(true);
      await signInWithPopup(auth, githubProvider); // Use GithubAuthProvider for GitHub sign-in
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login with GitHub!");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className={classes.loginHeader}>
        <div className={classes.headerTitle}>
          <img src={companyImage} alt="" />
          <h1>SweQuizer</h1>
        </div>
        <div className={classes.headerName}>
          <h1>Login to your Account</h1>
          <p>Welcome back! Select method to login:</p>
        </div>
        <div className={classes.headerAccounts}>
          <div className={classes.accountButton}>
            <img src={googleImage} alt="" />
            <button onClick={handleGoogleSignIn}>Google </button>
          </div>
          <div className={classes.accountButton}>
            <img src={githubImage} alt="" />
            <button onClick={handleGithubSignIn}>Github</button>
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
          type="text"
          placeholder="Enter email"
          icon="email"
          // required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          // required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={classes.forgotSection}>
          <label className={classes.remember}>
            <input type="checkbox" />
            Remember Me
          </label>

          <label className={classes.pass}>Forgot Password?</label>
        </div>

        <Button type="submit" disabled={loading}>
          <span>Log In</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div>
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </div>
    </Form>
  );
}
