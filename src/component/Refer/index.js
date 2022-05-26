import "./refer.css";
import phone from "../../assets/images/phone.svg";
import googleplay from "../../assets/images/googleplay.svg";
import appstore from "../../assets/images/appstore.svg";
import arrow from "../../assets/images/arrow.svg";
import Heading from "../../common/component/Heading";
const Refer = () => {
  return (
    <div className="refer">
      <div className="refer-section">
        <Heading title="Refer and or get link" />
        <div className="sub-heading">Invite your friends</div>
        <div className="refer-box">
          <input
            type="text"
            id="refer-input-box"
            placeholder="Enter Your 10 digit mobile number"
          />
          <img src={arrow} alt="loading.." />
        </div>
        <div className="refer-image">
        <img src={googleplay} alt="loading.." />
        <img src={appstore} alt="loading.." />
        </div>
        </div>
        <div className="image-section">
          <img src={phone} alt="loading.." className="phone1-image" />
          <img src={phone} alt="loading.." className="phone2-image" />
        </div>
    </div>
  );
};

export default Refer;
