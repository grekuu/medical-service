import PageBanner from "../components/PageBanner/PageBanner";
import ProvideService from "../components/ProvideService/ProvideService";
import QualifiedDoctors from "../components/QualifiedDoctors/QualifiedDoctors";
import SpecialService from "../components/SpecialService/SpecialService";
import Testimonials from "../components/Testimonials/Testimonials";
import VideoSection from "../components/VideoSection/VideoSection";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <PageBanner background="/medical-breadcamp_about.png" title="About us" />
      <SpecialService />
      <ProvideService />
      <VideoSection />
      <QualifiedDoctors />
      <Testimonials deviceType="desktop" />
    </div>
  );
};

export default AboutUs;
