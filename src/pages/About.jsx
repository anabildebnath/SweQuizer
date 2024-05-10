import Description from "../components/Description";
import Footer from "../components/Footer";
import Search from "../components/Search";

export default function Landing() {
  return (
    <div className="alignment">
      <Search />
      <Description />
      <Footer />
    </div>
  );
}
