import advantagePC from "../../assets/images/AdvantagePC.svg";
import advantageandroid from "../../assets/images/Advantage-android.svg";
import Heading from "../../common/component/Heading";
import gurantee from "../../assets/images/30.svg";
import time from "../../assets/images/time.svg";
import verified from "../../assets/images/verified.svg";
import excellent from "../../assets/images/excelent.svg";
import affordable from "../../assets/images/affordable.svg";
import "./advantage.css";
const Advantage = () => {
  return (
    <div className="advantage">
      <div className="advantage-pc">
        <img src={advantagePC} alt="loading.." className="advantage-image-pc" />
        <div className="advantage-content-pc">
          <Heading title="Why People Choose US?" />
          <div className="advantage-list-pc">
            <ul>
              <li>30 Days Service Guarantee</li>
              <li>Affordable Rates</li>
              <li>On Time Service</li>
              <li>Verified Professionals</li>
              <li>Excellent Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="advantage-android">
        <div className="advantage-content-android">
          <div className="advantage-title-android">Why People Choose US</div>
          <div className="advantage-list-android">
            <div className="advantage-android-list-item">
              <img
                src={gurantee}
                alt="loading..."
                className="advantage-android-list-image"
              />
              <div>Service Guarantee</div>
            </div>
            <div className="advantage-android-list-item">
              <img
                src={affordable}
                alt="loading..."
                className="advantage-android-list-image"
              />
              <div>Affordable Rates</div>
            </div>
            <div className="advantage-android-list-item">
              <img
                src={gurantee}
                alt="loading..."
                className="advantage-android-list-image"
              />
              <div>On Time Service</div>
            </div>
            <div className="advantage-android-list-item">
              <img
                src={gurantee}
                alt="loading..."
                className="advantage-android-list-image"
              />
              <div>Verified Professionals</div>
            </div>
            <div className="advantage-android-list-item">
              <img
                src={gurantee}
                alt="loading..."
                className="advantage-android-list-image"
              />
              <div>Excellent Service</div>
            </div>
          </div>
        </div>
        <img
          src={advantageandroid}
          alt="loading.."
          className="advantage-image-android"
        />
      </div>
    </div>
  );
};

export default Advantage;
