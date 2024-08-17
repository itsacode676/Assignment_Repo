import { useSelector } from "react-redux";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Searches from "./Components/Searches";

function App() {
  const { searchFlag } = useSelector((state) => state.card);
  return (
    <div className="flex flex-col w-full min-h-full">
      <Navbar />
      <HeroSection />
      {searchFlag ? <Searches /> : <Cards />}
      <Footer />
    </div>
  );
}

export default App;
