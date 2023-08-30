import FormAppointment from "../components/FormAppointment/FormAppointment";
import MapSection from "../components/MapSection/MapSection";
import PageBanner from "../components/PageBanner/PageBanner";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <PageBanner background="/medical-page-banner-2.png" title="Contact" />
      <FormAppointment />
      <MapSection />
    </div>
  );
};

export default Contact;
