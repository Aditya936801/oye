import "./SafeService.css";
import deliveryMan from "../../assets/images/delivery-man.svg";
import Heading from "../../common/component/Heading";
const SafeService = () => {
  return (
    <div className="safe-service">
      <div>
        <Heading title="100% Safe Services" />
        <div className="safety-list">
          <ul className="safety-point">
            <li>Masks</li>

            <li>Gloves</li>
          </ul>
          <ul className="safety-point">
            <li>Temperature Checks</li>
            <li>Sanitized Tools</li>
          </ul>
        </div>
      </div>
      <img src={deliveryMan} alt="loading.." className="safe-service-image" />
    </div>
  );
};

export default SafeService;
