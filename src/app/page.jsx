import HeroSection from "../components/home/HeroSection";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";
import SectionThree from "../components/home/SectionThree";
import SectionFour from "../components/home/SectionFour";
import SectionFive from "../components/home/SectionFive";
import SectionSix from "../components/home/SectionSix";

export default function Home() {
  return (
    <div className="home-section">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}
