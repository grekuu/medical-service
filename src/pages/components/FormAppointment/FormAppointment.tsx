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
        <div className="double-input">
          <input type="text" className="form-input" />
          <input type="text" className="form-input" />
        </div>
        <div className="double-input">
          <input type="text" className="form-input" />
          <input type="text" className="form-input" />
        </div>
        <div className="double-input">
          <input type="text" className="form-input" />
          <input type="text" className="form-input" />
        </div>
        <textarea
          className="form-input textarea-input"
          name="Your message"
          placeholder="Message"
          cols={30}
          rows={10}
          spellCheck="false"
        ></textarea>
        <button>Book Now &#8594;</button>
      </div>
      <div className="form-right"></div>
    </Container>
  );
};

export default FormAppointment;
