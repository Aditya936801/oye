import "./AllServiceCard.css"
const AllServiceCard = ({card}) => {
    return ( 
        <div className="AllServiceCard" >
        
            <img className="all-service-image" src={card.url} alt="loading.." />
            <div className="all-service-name" >{card.name}</div>
        

        </div>
     );
}
 
export default AllServiceCard;