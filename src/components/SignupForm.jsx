import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import classes from "../styles/SignupForm.module.css";
import companyImage from "../assets/images/company logo.svg";
import googleImage from "../assets/images/google.png";
import githubImage from "../assets/images/github.svg";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>

    <div className={classes.formContainer}>
            <div className={classes.loginHeader}>
        <div className={classes.headerTitle}>
          <img src={companyImage} alt="" />
          <h1>SweQuizer</h1>
        </div>
        <div className={classes.headerName}>
          <h1>Signup to create your Account</h1>
          <p>Welcome back! Select method to Signup:</p>
        </div>
        <div className={classes.headerAccounts}>
          <div className={classes.accountButton}>
            <img src={googleImage} alt="" />
            <button on>Google </button>
          </div>
          <div className={classes.accountButton}>
            <img src={githubImage} alt="" />
            <button>Github</button>
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
          placeholder="Enter name"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          type="text"
          required
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
