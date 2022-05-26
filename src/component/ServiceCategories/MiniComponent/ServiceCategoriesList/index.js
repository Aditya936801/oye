import "./ServiceCategoriesList.css";
import Carousel from "react-elastic-carousel";
import { breakPoints } from "../../../../common/breakpoints";


const ServiceCategoriesList = ({ list }) => {
    
  return (
    <div className="ServiceCategoriesList">
   
    <Carousel breakPoints={breakPoints} >
    
    
    {list?.map((el, idx) => {
        return (
            <div className="ServiceCategoriesCard" key={idx}>
            <div className="image-container">
            {el.url && (
                <img src={el.url} alt="loading.." className="service-image" />
              )}
            </div>

            <div className="service-name">{el.name}</div>

            <div className="service-detail">{el.detail}</div>
          </div>
          );
        })}
        
        </Carousel>
    </div>
  );
};

export default ServiceCategoriesList;
