import classes from "../styles/Layout.module.css";
import PublicNav from "./PublicNav";
import PrivateNav from "./PrivateNav";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser ? <PrivateNav /> : <PublicNav />}
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
