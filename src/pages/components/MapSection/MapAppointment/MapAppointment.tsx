import { Container } from "react-bootstrap";
import "./mapAppointment.scss";

const MapAppointment = () => {
  return (
    <Container className="map-appointment-container">
      <form className="appointment-box">
        <h2>Appointment by filling The form online</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea
          placeholder="Your message"
          className="input-style"
          cols={30}
          rows={10}
          spellCheck="false"
          required
        ></textarea>
        <button type="submit">Book Now &#8594;</button>
      </form>
    </Container>
  );
};

export default MapAppointment;
