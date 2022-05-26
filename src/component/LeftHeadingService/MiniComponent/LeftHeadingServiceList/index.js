import "./LeftHeadingServiceList.css";
import Carousel from "react-elastic-carousel";
import { breakPoints } from "../../../../common/breakpoints";


const TopHeadingServiceList = ({ list }) => {
  return (
    <div className="LeftHeadingServiceList">
    <Carousel breakPoints={breakPoints} className="all-service-carousel">

      {list?.map((el, idx) => {
        return (
          <div className={"LeftHeadingServiceCard"} key={idx} >
            <img src={el.url} alt="loading.." className="left-image" />

            <div className="left-name">{el.name}</div>
            <div className="left-detail">{el.detail}</div>
          </div>
        );
      })}
      </Carousel>
    </div>

  );
};

export default TopHeadingServiceList;
