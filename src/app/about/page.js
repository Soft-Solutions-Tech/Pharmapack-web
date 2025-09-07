import { Header } from "../components/header";
import { Footer } from "../components/footer";
import WhoWeAreSection from "../sections/WhoWeAreSection";
import MeetTheTeam from "../sections/MeetTheTeam";
import OurProcess from "../sections/OurProcess";
import VisionMissionSection from "../sections/VisionMissionSection";
export default function AboutPage() {
  return (
    <>
      <Header />
      <WhoWeAreSection />
      <MeetTheTeam />
      <OurProcess />
      <VisionMissionSection />
      <Footer />
    </>
  );
}
