import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ContentDetail() {
  const [countryDetail, setCountryDetail] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const countryData = location.state.countryData;
    setCountryDetail(countryData);
  }, []);

  return (
    <>
      <Link to=".." relative="path" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i> Back
      </Link>
      
      {countryDetail ? (
        <div className="country-detail">
          <img src={countryDetail.flag} alt="" />
          <h1>{countryDetail.name}</h1>
          <h5>
            NativeName : <p>{countryDetail.nativeName}</p>
          </h5>
          <h5>
            Population : <p>{countryDetail.population}</p></h5>
          <h5>
            Region : <p>{countryDetail.region}</p></h5>
          <h5>
            Subregion : <p>{countryDetail.subregion}</p></h5>
          <div>
            <h5>
              Top Level Domain : <p>{countryDetail.topLevelDomain}</p></h5>
            <h5>
              Currencies : <p>{countryDetail.currencies[0].name}</p></h5>
            <h5>Language : <p>{countryDetail.languages[0].name}</p> </h5>
          </div>

          <div className="country-borders">
            <h3>Border Countries :</h3>
            {countryDetail.borders && countryDetail.borders.length > 0 ? (
              countryDetail.borders.map((border) => (
                <span key={border}>{border}</span>
              ))
            ) : (
              <span>No bordering countries</span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
