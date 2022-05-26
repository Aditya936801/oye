import "./CustomerReviewList.css";
import Carousel from "react-elastic-carousel";
import { breakPoints } from "../../../../common/breakpoints";
import symbol from "../../../../assets/images/symbol.svg"


const CustomerReviewList = ({ list }) => {
    
  return (
    <div className="CustomerReviewList">
    
    <Carousel breakPoints={breakPoints} >
    
    
    {list?.map((el, idx) => {
        return (
            <div className="CustomerReviewCard" key={idx}>
        
            <img src={symbol} alt="loading.." className="Customer-Review-Symbol" />

            <div className="Customer-Review-comment">{el.comment}</div>

            <div className="Customer-Review-name">{el.name}</div>
          </div>
          );
        })}
        
        </Carousel>
        </div>
  );
};

export default CustomerReviewList;
