import  "./TopHeadingServiceCard.css"
const TopHeadingServiceCard = ({card}) => {
   
    return ( 
        <div className={card.name!=="Carpentary Services"?"TopHeadingServiceCard":"special-card"}>
    
        <img src={card.url} alt="loading.." className="top-image" />
        
        <div className="top-name">
        {card.name}
        
        </div>

        </div>
     );
}
 
export default TopHeadingServiceCard;