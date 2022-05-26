import stamp from "../../assets/images/stamp.svg"
import "./stamp.css"
const Stamp = () => {
  return <div className="stamp">
  
  <img src={stamp} alt="loading.." className="stamp-image" />
  <div className="stamp-content" >Hassle free services<br/> with OyeBusy</div>
  
  </div>;
};

export default Stamp;
