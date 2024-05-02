import classes from "../styles/TextInput.module.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <div className={classes.textInput}>
     
      <span className="material-icons-outlined"> {icon} </span>
      <input {...rest} />
    </div>
  );
}