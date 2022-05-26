import TopHeadingServiceCard from "../TopHeadingServiceCard";
import "./TopHeadingServiceList.css"

const TopHeadingServiceList = ({list}) => {
    return ( 
        <div className="TopHeadingServiceList">
        {
            list?.map((el,idx)=>{
                return(
                    <TopHeadingServiceCard card={el} key={idx} />
                    
                    

                )

            })
        }

        </div>
     );
}
 
export default TopHeadingServiceList;