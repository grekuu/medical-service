import { Container } from "react-bootstrap";
import "./atYourService.scss";
import ServiceTypeBox from "./ServiceTypeBox/ServiceTypeBox";

const AtYourService = () => {
  return (
    <div className="at-your-service-container">
      <Container>
        <h2>We’re at your service</h2>
        <h3>
          Tosser cheesed off tinkety tonk old fruit arse over tit give us.
        </h3>
        <div className="service-box-container">
          <ServiceTypeBox />
          <ServiceTypeBox />
        </div>
      </Container>
    </div>
  );
};

export default AtYourService;
