import "./specialServiceCard.scss";

interface SpecialServiceCardProps {
  img_src: string;
  title: string;
}

const SpecialServiceCard = ({ img_src, title }: SpecialServiceCardProps) => {
  return (
    <div className="special-service-card">
      <img src={img_src} alt="icon" loading="lazy" />
      <h3>{title}</h3>
      <p>The bee's knees the arse he lost his bottle super so I said hotpot.</p>
      <a href="#">Read More &#8594;</a>
    </div>
  );
};

export default SpecialServiceCard;
