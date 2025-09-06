import HeroBanner from "./sections/HeroBanner";
import PharmapackServices from "./sections/PharmapackServices";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import ProductionLines from "./sections/ProductionLines";
import IntroSection from "./sections/IntroSection";
import ClientsSection from "./sections/ClientsSection";
export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <IntroSection />
      <ProductionLines />
      <PharmapackServices />
      <ClientsSection />
      <Footer />
    </>
  );
}
