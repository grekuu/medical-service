import ExploreDepartments from "../components/ExploreDepartments/ExploreDepartments";
import PageBanner from "../components/PageBanner/PageBanner";
import "./services.scss";

const Services = () => {
  return (
    <div className="services-container">
      <PageBanner background="/medical-page-banner-4.png" title="Services" />
      <ExploreDepartments />
    </div>
  );
};

export default Services;
