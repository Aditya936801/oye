
import Heading from "../../common/component/Heading";
import { useEffect, useState } from "react";
import { dbRef } from "../../firebase";
import { child, get } from "firebase/database";
import CustomerReviewList from "./MiniComponent/CustomerReviewList";

const CustomerReview = ({ type }) => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    get(child(dbRef, `assets/Comments`))
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
  }, []);

  return (
    
       
        <div>
          <Heading
            title="What Our Customers Say"
          />
          <CustomerReviewList list={list} />
        </div>
      )
     
    
  
};

export default CustomerReview;
