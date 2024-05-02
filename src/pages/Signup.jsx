import Illustration from "../components/Illustration";
import SignupForm from "../components/SignupForm";
import classes from "../styles/Login.module.css";

export default function Signup() {
  return (
    <div className={classes.loginBackground}>
      <div className={classes.loginContainer}>
        <SignupForm />
        <Illustration />
      </div>
    </div>
  );
}
