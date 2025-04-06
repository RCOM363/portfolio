import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <TechnologiesSection />
    </div>
  );
}
