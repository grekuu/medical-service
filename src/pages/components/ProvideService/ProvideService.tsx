import { Container } from "react-bootstrap";
import "./provideService.scss";

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
      </div>
    </Container>
  );
};

export default ProvideService;
