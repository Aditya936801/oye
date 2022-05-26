import Heading from "../../common/component/Heading"
import {useEffect,useState} from "react"
import { dbRef } from "../../firebase";
import { child, get } from "firebase/database";
import TopHeadingServiceList from "./MiniComponent/TopHeadingServiceList";

const TopHeadingService = ({type}) => {
    const [list,setList] = useState([])
    const HomeApplianceServices = list?.HomeApplianceServices
    const SameDayServices = list?.SameDayServices
    const TrendingServices = list?.TrendingServices
    useEffect(() => {
        get(child(dbRef, `assets/TopHeadingServices`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setList(snapshot.val());
          
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }, [])
    
    return ( 
        <div>
        {
            type === "TrendingServices" && 
            <div>
            <Heading title="Trending Services" subtitle="Premium Home Services " />
            <TopHeadingServiceList list={TrendingServices} />
            </div>

        }
        {
            type === "SameDayServices" && 
            <div>
            <Heading title="Same Day Services" subtitle="Premium Home Services " />
            <TopHeadingServiceList list={SameDayServices} />
            </div>

        }
        {
            type === "homeApplianceServices" && 
            <div>
            <Heading title="Home Appliance Services" subtitle="Premium Home Services " />
            <TopHeadingServiceList list={HomeApplianceServices} />
            </div>

        }

        </div>

     );
}
 
export default TopHeadingService;