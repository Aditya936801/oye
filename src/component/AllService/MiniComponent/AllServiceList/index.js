import AllServiceCard from "../AllServiceCard"
import "./AllServiceList.css"
const AllServiceList = ({list}) => {

    return ( 
        <div className="AllServiceList" >
            {
                list?.map((el,idx)=>{
                    return(

                        <div id="single-service" key={idx} >
                        <AllServiceCard card={el} /  >
                        </div>
                        )

                })
            }
        </div>

     );
}
 
export default AllServiceList;
