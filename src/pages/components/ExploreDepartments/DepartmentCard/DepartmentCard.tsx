import "./departmentCard.scss";

interface DepartmentCardProps {
  img_src: string;
  title: string;
  type: string;
}

const DepartmentCard = ({ img_src, title, type }: DepartmentCardProps) => {
  return (
    <div className="department-card">
      <img src={img_src} alt="medical-service" />
      <h3>{title}</h3>
      <p>{type}</p>
    </div>
  );
};

export default DepartmentCard;
