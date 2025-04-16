import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <div className="w-full px-4">
      <HeroSection />
      <ExperienceSection />
      <TechnologiesSection />
    </div>
  );
}
