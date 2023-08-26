import "./doctorCard.scss";
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";

interface DoctorCardProps {
  doc_img: string;
  doc_name: string;
  doc_type: string;
}

const DoctorCard = ({ doc_name, doc_type, doc_img }: DoctorCardProps) => {
  return (
    <div className="doctor-card">
      <div className="image-container">
        <img src={doc_img} alt="medical-team" />
        <div className="image-overlay">
          <div className="small-squares">
            <a href="https://www.facebook.com/" className="small-square">
              <BiLogoFacebook />
            </a>
            <a href="https://twitter.com/" className="small-square">
              <BiLogoTwitter />
            </a>
            <a href="https://www.youtube.com/" className="small-square">
              <BiLogoYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="doctor-info">
        <h3>{doc_name}</h3>
        <h6>{doc_type}</h6>
      </div>
    </div>
  );
};

export default DoctorCard;
