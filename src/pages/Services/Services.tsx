import AtYourService from "../components/AtYourService/AtYourService";
import EmergencyBanner from "../components/EmergencyBanner/EmergencyBanner";
import ExploreDepartments from "../components/ExploreDepartments/ExploreDepartments";
import FormAppointment from "../components/FormAppointment/FormAppointment";
import PageBanner from "../components/PageBanner/PageBanner";
import "./services.scss";

const Services = () => {
  return (
    <div className="services-container">
      <PageBanner background="/medical-page-banner-4.png" title="Services" />
      <ExploreDepartments />
      <AtYourService />
      <FormAppointment />
      <EmergencyBanner />
    </div>
  );
};

export default Services;
