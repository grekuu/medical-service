import { Container } from "react-bootstrap";
import "./testimonials.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface TestimonialsProps {
  deviceType: "desktop" | "tablet" | "mobile" | "superLargeDesktop"; // Adjust the types as needed
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="testimonials-container">
      <Container>
        <h2>Explore our testimonials</h2>
        <p>Tosser cheesed off tinkety tonk old fruit arse over tit give us.</p>
        <Carousel
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          responsive={responsive}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          autoPlaySpeed={3000}
          customTransition="transform 800ms ease-in-out"
          transitionDuration={800}
        >
          {/* Item 1 */}
          <div className="carousel-item">
            <div className="carousel-left">
              <p>
                Why I say old chap that is spifing, cockup cheeky get stuffed
                mate haggle chinwag posh jeffrey bevy sloshed James.
              </p>
              <div className="person-info">
                <strong>Elon Gated</strong>
                <span>Pediatrician</span>
              </div>
            </div>
            <div className="carousel-right">
              <img src="/img_medical_testimonial1.png" alt="person" />
            </div>
          </div>
          {/* Item 2 */}
          <div className="carousel-item">
            <div className="carousel-left">
              <p>
                Why I say old chap that is spifing, cockup cheeky get stuffed
                mate haggle chinwag posh jeffrey bevy sloshed James.
              </p>
              <div className="person-info">
                <strong>Barry Tone</strong>
                <span>Neurologist</span>
              </div>
            </div>
            <div className="carousel-right">
              <img src="/img_medical_testimonial2.png" alt="person" />
            </div>
          </div>
          {/* Item 3 */}
          <div className="carousel-item">
            <div className="carousel-left">
              <p>
                Why I say old chap that is spifing, cockup cheeky get stuffed
                mate haggle chinwag posh jeffrey bevy sloshed James.
              </p>
              <div className="person-info">
                <strong>Alan Fresco</strong>
                <span>Surgeon</span>
              </div>
            </div>
            <div className="carousel-right">
              <img src="/img_medical_testimonial3.png" alt="person" />
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
