import HeroBanner from "./sections/HeroBanner";
import PharmapackServices from "./sections/PharmapackServices";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <PharmapackServices />
      <Footer />
    </>
  );
}
