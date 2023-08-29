import { Container } from "react-bootstrap";
import "./formAppointment.scss";

const FormAppointment = () => {
  return (
    <Container className="form-appointment-container">
      <div className="form-left">
        <h2>Appointment by filling The form online</h2>
        <h3>
          Tosser cheesed off tinkety tonk old fruit arse over tit give us.
        </h3>
        <form>
          <div className="double-input">
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="double-input">
            <input
              type="tel"
              className="form-input"
              placeholder="Phone"
              required
            />
            <input
              type="number"
              className="form-input"
              placeholder="Age"
              required
            />
          </div>
          <div className="double-input">
            <input
              type="date"
              className="form-input"
              placeholder="Appointment Date"
              required
            />
            <input
              type="time"
              className="form-input"
              placeholder="12:00 PM"
              required
            />
          </div>
          <textarea
            className="form-input textarea-input"
            name="Your message"
            placeholder="Message"
            cols={30}
            rows={10}
            spellCheck="false"
            required
          ></textarea>
          <button type="submit">Book Now &#8594;</button>
        </form>
      </div>
      <div className="form-right">
        <img src="/medical-appointment.png" alt="image" />
      </div>
    </Container>
  );
};

export default FormAppointment;
