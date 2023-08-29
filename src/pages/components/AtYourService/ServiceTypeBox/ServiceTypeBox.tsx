import "./serviceTypeBox.scss";

interface ServiceTypeBoxProps {
  type: string;
  title: string;
  doc_name: string;
  doc_type: string;
}

const ServiceTypeBox = ({
  type,
  title,
  doc_name,
  doc_type,
}: ServiceTypeBoxProps) => {
  return (
    <div className="service-type-box">
      <img src="/service-01.png" className="service-img" loading="lazy"></img>
      <div className="service-info">
        <span>{type}</span>
        <h3>{title}</h3>
        <a href="#">Contact Today &#8594;</a>
        <h2>{doc_name}</h2>
        <p>{doc_type}</p>
      </div>
    </div>
  );
};

export default ServiceTypeBox;
