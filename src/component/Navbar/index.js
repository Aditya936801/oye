import logo from "../../assets/images/logo.svg";
import dropArrow from "../../assets/images/drop-arrow.svg";
import locationIcon from "../../assets/images/locationIcon.svg";
import playstore from "../../assets/images/playstore.svg";
import cart from "../../assets/images/cart.svg";
import "./navbar.css";
import SearchBar from "../../common/component/SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="android">
        <div className="android-navbar-address">
          <img src={locationIcon} alt="loading.." className="address-icon" />
          <div>Sector-44, Real Estate, Sector- 62, Gurugram</div>
          <img src={dropArrow} alt="loading.." className="address-icon" />
        </div>
        <SearchBar />
      </div>
      <div className="navbar-left">
        <img src={logo} alt="loading.." className="logo" />
        <div className="address">
          
            <img src={locationIcon} alt="loading.." className="address-icon" />
            <div>
              1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301
            </div>
            <img src={dropArrow} alt="loading.." className="address-icon" />
          
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-content">
          <div>Blog</div>
          <div>Career</div>
          <div className="navbar-account">
          <div  >
          Account
          </div>
          <img src={dropArrow} alt="loading.." className="address-icon" />
          </div>
        </div>
        <div className="navbar-buttons">
          <img src={cart} alt="loading.." id="cart-icon" />
          <div className="download">
            <img src={playstore} alt="loading.." id="playstore-icon" />
            <div>Download App</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
