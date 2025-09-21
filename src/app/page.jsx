import HeroSection from "../components/home/HeroSection";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";
import SectionThree from "../components/home/SectionThree";
import SectionFour from "../components/home/SectionFour";
import SectionFive from "../components/home/SectionFive";

export default function Home() {
  return (
    <div className="home-section">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}
