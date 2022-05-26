import "./ServiceCategoriesList.css";
import Carousel from "react-elastic-carousel";
import { breakPoints } from "../../../../common/breakpoints";


const ServiceCategoriesList = ({ list }) => {
    
  return (
    <div className="ServiceCategoriesList">
    
    <Carousel breakPoints={breakPoints} className="all-service-carousel">
    
    
    {list?.map((el, idx) => {
        return (
            <div className="ServiceCategoriesCard" key={idx}>
            <div className="image-container">
            {el.url && (
                <img src={el.url} alt="loading.." className="top-image" />
              )}
            </div>

            <div className="top-name">{el.name}</div>

            <div className="top-detail">{el.detail}</div>
          </div>
          );
        })}
        
        </Carousel>
    </div>
  );
};

export default ServiceCategoriesList;
