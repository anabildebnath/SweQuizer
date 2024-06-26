import classes from "../styles/Form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      <div className={classes.formConatiner}>{children}</div>
    </form>
  );
}
