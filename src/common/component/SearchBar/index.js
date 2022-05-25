import searchIcon from "../../../assets/images/searchIcon.svg"
import "./searchbar.css"

const SearchBar = () => {
    return ( 
        <div className="Search" >
        <img src={searchIcon} alt="loading.." />
        <input type="text" id="search-input-box" placeholder="Search..."/>

        </div>
     );
}
 
export default SearchBar;