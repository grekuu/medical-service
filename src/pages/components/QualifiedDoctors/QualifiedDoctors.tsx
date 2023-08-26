import { Container } from "react-bootstrap";
import "./qualifiedDoctors.scss";
import DoctorCard from "./DoctorCard/DoctorCard";

const QualifiedDoctors = () => {
  return (
    <Container className="qualified-doctors-container">
      <h2>Our high qualified Doctors</h2>
      <p>Tosser cheesed off tinkety tonk old fruit arse over tit give us.</p>
      <div className="cards-container">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
      <div>
        <h6>Want more information?</h6> <a href="#">See the whole stuff.</a>
      </div>
    </Container>
  );
};

export default QualifiedDoctors;
