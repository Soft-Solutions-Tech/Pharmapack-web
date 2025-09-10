import HeroBanner from "./sections/HeroBanner";
import PharmapackServices from "./sections/PharmapackServices";
import ProductionLines from "./sections/ProductionLines";
import IntroSection from "./sections/IntroSection";
import ClientsSection from "./sections/ClientsSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IntroSection />
      <ProductionLines />
      <PharmapackServices />
      <ClientsSection />
    </>
  );
}
