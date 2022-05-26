import "./characterstic.css";
import high from "../../assets/images/high-quality.svg";
import hassel from "../../assets/images/hassel-free.svg";
import cashless from "../../assets/images/cashless.svg";
const Characterstic = () => {
  return (
    <div className="characterstic">
      <div className="characterstic-title">Assured Peace of Mind</div>
      <div className="characterstic-list">
        <div className="characterstic-list-content" >
          <img src={high} alt="loading.." className="characterstic-image" />
          <div className="characterstic-info">
            <div className="characterstic-name">High Quality Work</div>
            <div className="characterstic-detail">
              Only authorized service experts and genuine spare parts and
              equipments
            </div>
          </div>
        </div>
        <div className="characterstic-list-content" >
       
          <img src={hassel} alt="loading.." className="characterstic-image" />
          <div className="characterstic-info">
            <div className="characterstic-name">Hassle Free</div>
            <div className="characterstic-detail">
            Sit back and relax.
            We do all the work
            </div>
          </div>
        </div>
        <div className="characterstic-list-content" >
        
          <img src={cashless} alt="loading.." className="characterstic-image" />
          <div className="characterstic-info">
            <div className="characterstic-name">Totally Cashless</div>
            <div className="characterstic-detail">
            Pay online for Safe & Secure payment.
            Many benefits and offers available with online payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characterstic;
