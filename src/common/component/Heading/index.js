import "./heading.css"
const Heading = ({title,subtitle}) => {
    return ( 
    <div className="heading">
        {title && <div className="title"> {title} </div> }
        {subtitle && <div className="subtitle">{subtitle}</div> }

    </div> 
    );
}
 
export default Heading;