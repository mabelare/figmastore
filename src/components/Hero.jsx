import HeroImages from "./HeroImages";
import ReforestationBadge from "./ReforestationBadge";

export default function Hero() {
  return (
    <section className="hero-section relative h-80 md:h-96 lg:h-screen bg-[#27C96E] overflow-visible mb-8">
      <HeroImages />
      <ReforestationBadge />
    </section>
  );
}
