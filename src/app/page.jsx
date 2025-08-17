import Navbar from "./components/Navbar";
import HeroSection from "./pages/Home/HeroSection";
import SectionOne from "./pages/Home/SectionOne";
import SectionTwo from "./pages/Home/SectionTwo";
import SectionThree from "./pages/Home/SectionThree";
import SectionFour from "./pages/Home/SectionFour";
import SectionFive from "./pages/Home/SectionFive";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="home-section">
        <HeroSection />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>

      <Footer />
    </div>
  );
}
