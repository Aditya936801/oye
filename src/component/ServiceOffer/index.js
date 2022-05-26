import "./serviceoffer.css"
import offer from "../../assets/images/offer.svg"
const ServiceOffer = () => {
    return ( 
        <div className="service-offer" >
            <img src={offer} alt="loading..." className="offer-image" />
            <div className="offer-content">
                <div className="offer-detail">TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!</div>
                <div className="offer-sub-detail">
                <hr className="offer-line" />  
                <div>
                On any service you book 
                </div> 
                <hr className="offer-line" />
                </div>
                <div className="offer-button">
                BOOK A SERVICE
                </div>
            </div>
        </div>
     );
}
 
export default ServiceOffer;