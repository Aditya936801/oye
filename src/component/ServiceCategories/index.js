
import Heading from "../../common/component/Heading";
import { useEffect, useState } from "react";
import { dbRef } from "../../firebase";
import { child, get } from "firebase/database";
import ServiceCategoriesList from "./MiniComponent/ServiceCategoriesList";

const ServiceCategories = ({ type }) => {
  const [list, setList] = useState([]);
  const MostUsedServices = list?.MostUsedServices;
  const ProfessionalCleaningServices = list?.ProfessionalCleaningServices;
  const TrendingServices = list?.TrendingServices;
  useEffect(() => {
    get(child(dbRef, `assets/ServiceCategories`))
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
      {type === "ProfessionalCleaningServices" && (
        <div>
          <Heading
            title="Professional Cleaning Services"
            subtitle="Premium Home Services "
          />
          <ServiceCategoriesList list={ProfessionalCleaningServices} />
        </div>
      )}
      {type === "MostUsedServices" && (
        <div>
          <Heading
            title="Most Used Services"
            subtitle="Premium Home Services "
          />
          <ServiceCategoriesList list={MostUsedServices} />
        </div>
      )}
      {type === "TrendingServices" && (
        <div>
          <Heading
            title="Trending Services"
            subtitle="Premium Home Services "
          />
          <ServiceCategoriesList list={TrendingServices} />
        </div>
      )}
    </div>
  );
};

export default ServiceCategories;
