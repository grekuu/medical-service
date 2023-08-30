import MapAppointment from "./MapAppointment/MapAppointment";
import "./mapSection.scss";

const MapSection = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.3612729267297!2d14.486878577086085!3d53.24722518213507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa01a712ac5a25%3A0xcfab1f46662f4ed2!2sPizzeria%20Peperoni!5e0!3m2!1spl!2spl!4v1693227359702!5m2!1spl!2spl"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-iframe"
      ></iframe>
      <MapAppointment />
    </div>
  );
};

export default MapSection;
