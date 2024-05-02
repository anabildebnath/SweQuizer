import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";
import classes from "../styles/Login.module.css";

export default function Signup() {
  return (
    <div className={classes.loginBackground}>
      <div className={classes.loginContainer}>
        <LoginForm />
        <Illustration />
      </div>
    </div>
  );
}
