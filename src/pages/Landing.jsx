import About from "../components/About";
import Footer from "../components/Footer";
import Search from "../components/Search";
import classes from "../styles/Landing.module.css";

export default function Landing() {
  return (
    <div className={classes.alignment}>
      <Search />
      <About />
      <Footer />
    </div>
  );
}
