import { Container } from "react-bootstrap";
import ProvideService from "../components/ProvideService/ProvideService";
import SpecialService from "../components/SpecialService/SpecialService";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <Container className="banner-content">
          <div className="banner-left">
            <h1>Get Quick Medical Service</h1>
            <p>
              Start your 14-day free trial. <br /> Get started with referral
              elementskit today
            </p>
            <button>Explore More &#8594;</button>
          </div>
          <div className="banner-right"></div>
        </Container>
      </div>
      <SpecialService />
      <ProvideService />
    </div>
  );
};

export default Home;
