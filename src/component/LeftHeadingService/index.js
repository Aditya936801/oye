import Heading from "../../common/component/Heading"
import {useEffect,useState} from "react"
import { dbRef } from "../../firebase";
import { child, get } from "firebase/database";
import LeftHeadingServiceList from "./MiniComponent/LeftHeadingServiceList";
import "./LeftHeadingService.css"

const LeftHeadingService = ({type}) => {
    const [list,setList] = useState([])
    const CarpenterServices = list?.CarpenterServices
    const ElectricianServices = list?.ElectricianServices
    const PlumberServices = list?.PlumberServices
    useEffect(() => {
        get(child(dbRef, `assets/LeftHeadingServices`))
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
            type === "CarpenterServices" && 
            <div className="leftHeading-container" >
            <Heading title="Carpenter Services" subtitle="Premium Home Services "   />
            <LeftHeadingServiceList list={CarpenterServices} />
            </div>

        }
        {
            type === "ElectricianServices" && 
            <div className="leftHeading-container" >
            <Heading title="Electrician Services" subtitle="Premium Home Services " />
            <LeftHeadingServiceList list={ElectricianServices} />
            </div>

        }
        {
            type === "PlumberServices" && 
            <div className="leftHeading-container" >
            <Heading title="Plumber Services" subtitle="Premium Home Services " />
            <LeftHeadingServiceList list={PlumberServices} />
            </div>

        }

        </div>

     );
}
 
export default LeftHeadingService;