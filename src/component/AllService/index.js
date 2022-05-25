import "./AllService.css";
import whitearrow from "../../assets/images/drop-arrow-white.svg";
import { useEffect, useState } from "react";
import { dbRef } from "../../firebase";
import { child, get } from "firebase/database";
import Carousel from "react-elastic-carousel";
import AllServiceList from "./MiniComponent/AllServiceList";

const AllService = () => {
  const [list, setList] = useState([]);
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    get(child(dbRef, `assets/AllServices`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setList(snapshot.val().Services);
          setImageList(snapshot.val().Carousel);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 708, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="all-service ">
      <div className="all-service-pc">
        <div className="all-service-heading">What are you looking for?</div>
        <div className="offer">
          FLAT OFF
          <img src={whitearrow} alt="loading.." />
        </div>
        <AllServiceList list={list} />
        <Carousel breakPoints={breakPoints} className="all-service-carousel">
          {imageList?.map((el, idx) => {
            return (
              <styled key={idx}>
                <img
                  src={el}
                  alt="loading"
                  className="all-service-carousel-image"
                />
              </styled>
            );
          })}
        </Carousel>
      </div>
      <div className="all-service-android" >
      <div className="android-offer">Top Offers</div>
      <Carousel breakPoints={breakPoints} className="all-service-carousel">
          {imageList?.map((el, idx) => {
            return (
              <styled key={idx}>
                <img
                  src={el}
                  alt="loading"
                  className="all-service-carousel-image"
                />
              </styled>
            );
          })}
        </Carousel>
        <AllServiceList list={list} />

      </div>    
    </div>
  );
};

export default AllService;
