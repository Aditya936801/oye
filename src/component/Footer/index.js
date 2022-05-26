import "./footer.css";
import download from "../../assets/images/download.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import pinterest from "../../assets/images/pinterest.svg";
import youtube from "../../assets/images/youtube.svg";
import favourite from "../../assets/images/favourite.svg";
import booking from "../../assets/images/booking.svg";
import account from "../../assets/images/account.svg";
import home from "../../assets/images/home.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-pc">
        <div className="footer-content">
          <div className="footer-title">RELATIVE SERVICES</div>
          <div className="footer-detail">
            Electrician | Plumber | Carpenter | Packers & Movers | Salon For
            Woman | Salon For Man | Electronic Appliances | CCTV Installation &
            Repair | Ro- repair & service | house Painter | Pest Control |
            Kitchen Cleaning | Bathroom Cleaning | Sofa Cleaning | Carpet
            Cleaning | Home Deep Cleaning
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-title">TOP LOCATIONS</div>
          <div className="footer-detail">
            Delhi | Gurgaon | Noida | Ghaziabad | Faridhabad | Greater Noida
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-title">ABOUT US</div>
          <div className="footer-detail">
            <div>Blog</div>
            <div>Near me</div>
            <div>Careers</div>
            <div>Terms & Conditions</div>
            <div>Privacy</div>
            <div>Policy</div>
            <div>Offers & Gift Cards</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <div className="contact-us-title">Contact-Us</div>
            <div className="contact-us-detail">
              <div>Phone : +91 9990001089 </div>
              <div>Email : support@oyebusy.com</div>
            </div>
          </div>
          <div className="footer-section">
            <div className="contact-us-title">Download Oyebusy App </div>
            <img
              src={download}
              alt="loading..."
              className="footer-download-image"
            />
          </div>
        </div>
        <div className="footer-content">
          <img src={instagram} alt="loading.." className="footer-icon" />
          <img src={twitter} alt="loading.." className="footer-icon"/>
          <img src={linkedin} alt="loading.." className="footer-icon"/>
          <img src={facebook} alt="loading.." className="footer-icon"/>
          <img src={pinterest} alt="loading.." className="footer-icon"/>
          <img src={youtube} alt="loading.." className="footer-icon"/>
        </div>
        <div className="footer-content footer-end ">
        © 2021 OyeBusy Technologies Pvt. Ltd.
        </div>
      </div>

      <div className="footer-android">
      <img src={home} alt="loading.." />
      <img src={booking} alt="loading.."/>
      <img src={favourite} alt="loading.." />
      <img src={account} alt="loading.." />
      </div>
      
    </div>
  );
};

export default Footer;
