import { Container } from "react-bootstrap";
import "./qualifiedDoctors.scss";
import DoctorCard from "./DoctorCard/DoctorCard";
import { useLocation } from "react-router-dom";

const QualifiedDoctors = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Container className="qualified-doctors-container">
      <h2>Our high qualified Doctors</h2>
      <p>Tosser cheesed off tinkety tonk old fruit arse over tit give us.</p>
      <div className="cards-container">
        <DoctorCard
          doc_name="Dr. Barry Tone"
          doc_type="Founder"
          doc_img="/medical-team-1.png"
        />
        <DoctorCard
          doc_name="Dr. Sue Shei"
          doc_type="Pediatrician"
          doc_img="/medical-team-2.png"
        />
        <DoctorCard
          doc_name="Dr. Jonquil Von"
          doc_type="Traumatology"
          doc_img="/medical-team-3.png"
        />
        <DoctorCard
          doc_name="Dr. Jackson Pot"
          doc_type="Neurologist"
          doc_img="/medical-team-4.png"
        />

        {location.pathname === "/doctors" ? (
          <>
            <DoctorCard
              doc_name="Dr. Jackson Pot"
              doc_type="Neurologist"
              doc_img="/medical-team-5.png"
            />
            <DoctorCard
              doc_name="Dr. Jackson Pot"
              doc_type="Neurologist"
              doc_img="/medical-team-6.png"
            />
            <DoctorCard
              doc_name="Dr. Jackson Pot"
              doc_type="Neurologist"
              doc_img="/medical-team-7.png"
            />
            <DoctorCard
              doc_name="Dr. Jackson Pot"
              doc_type="Neurologist"
              doc_img="/medical-team-8.png"
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className={location.pathname === "/doctors" ? "hide" : ""}>
        <h6>Want more information?</h6> <a href="#">See the whole stuff.</a>
      </div>
    </Container>
  );
};

export default QualifiedDoctors;
