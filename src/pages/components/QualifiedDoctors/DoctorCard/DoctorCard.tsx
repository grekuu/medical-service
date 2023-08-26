import "./doctorCard.scss";

const DoctorCard = () => {
  return (
    <div className="doctor-card">
      <div className="image-container">
        <img src="/medical-team-1.png" alt="medical-team" />
        <div className="image-overlay">
          <div className="small-squares">
            <div className="small-square">1</div>
            <div className="small-square">2</div>
            <div className="small-square">3</div>
          </div>
        </div>
      </div>
      <div className="doctor-info">
        <h3>Dr. Barry Tone</h3>
        <h6>Founder</h6>
      </div>
    </div>
  );
};

export default DoctorCard;
