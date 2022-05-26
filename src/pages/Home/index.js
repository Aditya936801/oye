import HomeService from "../../component/HomeService";
import AllService from "../../component/AllService";
import TopHeadingService from "../../component/TopHeadingService";
import SafeService from "../../component/SafeService";
import ServiceCategories from "../../component/ServiceCategories";
import Characterstic from "../../component/Characterstic";
import ServiceOffer from "../../component/ServiceOffer";
import LeftHeadingService from "../../component/LeftHeadingService";
import Advantage from "../../component/Advantage";
import CustomerReview from "../../component/CustomerReview";
import Refer from "../../component/Refer";
import Stamp from "../../component/stamp";
import Footer from "../../component/Footer";
import "./home.css"
const Home = ()=> {
  return (
    <div className="home">
    <div className="services" >
    <HomeService/>
    <AllService/>
    </div>
    <TopHeadingService type="TrendingServices" />
    <TopHeadingService type="SameDayServices" />
    <SafeService/>
    <ServiceCategories type="ProfessionalCleaningServices" />
    <ServiceCategories type="MostUsedServices" />
    <Characterstic />
    <ServiceCategories type="TrendingServices" />
    <TopHeadingService type="homeApplianceServices" />
    <ServiceOffer/>
    <LeftHeadingService type="ElectricianServices" /  >
    <LeftHeadingService type="PlumberServices" /  >
    <LeftHeadingService type="CarpenterServices" /  >
    <Advantage/>
    <CustomerReview/>
    <Refer/>
    <Stamp/>
    <Footer/>


    </div>
  )
}

export default Home;