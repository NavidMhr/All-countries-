import React, { useEffect, useState } from "react";
import jsonData from "../../data.json";
import { Link, useLocation, useOutletContext } from "react-router-dom";

export default function MainContent() {
  const [data, setData] = useState(null);
  const path = useLocation();
  const filterPath = path.search.slice(6);
  const { filterSearch } = useOutletContext();
  
  useEffect(() => {
    setData(jsonData);
  }, []);

  
  const filterDisplay =
  data &&
  data.filter(
    (cn) =>
      cn.name.toLowerCase().includes(filterSearch.toLowerCase()) &&
      (cn.region === filterPath || filterPath === "")
  );


  return (
    <>
      <div className="countries-container">
        {filterDisplay
          ? filterDisplay.map((item) => (
              <Link
                className="country-card"
                key={item.name}
                to={`/${item.name}`}
                state={{ countryData: item }}
              >
                <img src={item.flag} alt="" />
                <h1>
                  <p>{item.name}</p>
                </h1>
                <h5>
                  Population: <p>{item.population}</p>
                </h5>
                <h5>
                  Region: <p>{item.region}</p>
                </h5>
                <h5>
                  Capital: <p>{item.capital}</p>
                </h5>
              </Link>
            ))
          : null}
      </div>
    </>
  );
}