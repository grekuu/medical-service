import { Container } from "react-bootstrap";
import "./provideService.scss";
import { BiSolidCheckCircle } from "react-icons/bi";

const ProvideService = () => {
  return (
    <Container className="provide-service-container">
      <div className="provide-service-left">
        <img src="/img_counter.png" alt="img_counter" />
        <div className="expertise-years">
          <h3>16</h3>
          <p>
            Years <br />
            Expertise
          </p>
        </div>
      </div>
      <div className="provide-service-right">
        <h2>We provide Service anytime</h2>
        <p>
          Tosser cheesed off tinkety tonk old fruit arse over give us bell nancy
          boy cup of char say, cuppa brolly.
        </p>
        <div className="checklist">
          <div className="checklist-left">
            <div className="checklist-item">
              <BiSolidCheckCircle className="checkmark-icon" />
              <span>On-site lab services</span>
            </div>
            <div className="checklist-item">
              <BiSolidCheckCircle className="checkmark-icon" />
              <span>Blood Resources Program</span>
            </div>
          </div>
          <div className="checklist-right">
            <div className="checklist-item">
              <BiSolidCheckCircle className="checkmark-icon" />
              <span>Family Planning</span>
            </div>
            <div className="checklist-item">
              <BiSolidCheckCircle className="checkmark-icon" />
              <span>In vitro Fertilization</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="funfact-container">
          <div className="fact">
            <div className="number">276+</div>
            <span>Wining Awards</span>
          </div>
          <div className="fact">
            <div className="number">13k</div> <span>Tests Completed</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProvideService;
