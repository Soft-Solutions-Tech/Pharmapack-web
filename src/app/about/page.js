import WhoWeAreSection from "../sections/WhoWeAreSection";
import MeetTheTeam from "../sections/MeetTheTeam";
import OurProcess from "../sections/OurProcess";
import VisionMissionSection from "../sections/VisionMissionSection";
import CertificatesSection from "../sections/CertificateSection";
import YoungGiantSection from "../sections/YoungGiantSection";
import DistributionChannelsSection from "../sections/DistributionhannelsSection";

export default function AboutPage() {
  return (
    <>
      <WhoWeAreSection />
      <MeetTheTeam />
      <OurProcess />
      <VisionMissionSection />
      <DistributionChannelsSection />
      {/*<YoungGiantSection />*/}
      <CertificatesSection />
    </>
  );
}
