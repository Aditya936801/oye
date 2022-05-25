import "./HomeService.css"
import SearchBar from "../../common/component/SearchBar";

const HomeService = () => {
    return ( 
        <div className="home-service home-service-android " >
            <div className="home-service-content" >
            Home services,<br/>on demand
            </div>
            <SearchBar/>
            <div className="home-service-example" >Examples:  Salon, Women’s hair, Men’s grooming & Many more..</div>

        </div> );
}
 
export default HomeService;