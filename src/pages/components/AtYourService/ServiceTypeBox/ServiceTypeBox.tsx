import "./serviceTypeBox.scss";

const ServiceTypeBox = () => {
  return (
    <div className="service-type-box">
      <img src="/service-01.png" className="service-img"></img>
      <div className="service-info">
        <span>Medical Checkup</span>
        <h3>The website of the Royal melbourne Hospital.</h3>
        <a href="#">Contact Today &#8594;</a>
        <h2>Lance Bogrol</h2>
        <p>Founder</p>
      </div>
    </div>
  );
};

export default ServiceTypeBox;
