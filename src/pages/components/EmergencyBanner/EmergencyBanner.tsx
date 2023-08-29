import { Container } from "react-bootstrap";
import "./emergencyBanner.scss";

const EmergencyBanner = () => {
  return (
    <div className="emergency-banner-container">
      <Container className="content-container">
        <div className="emergency-left">
          <h2>24 Hour Emergency</h2>
          <h3>+(601) 425 760 33</h3>
        </div>
        <div className="emergency-right">
          <form className="right-box">
            <h2>The newsletter</h2>
            <h3>The latest news, articles, and resources.</h3>
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EmergencyBanner;
