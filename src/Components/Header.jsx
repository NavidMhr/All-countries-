import React, { useState } from "react";
import { Link, useOutletContext, useParams, useSearchParams } from "react-router-dom";

export default function Header() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  function handleFilter(e){
    setSearchParams({type : `${e.target.value}`})
    e.target.value === "All" ? setSearchParams({}): null
  }


  return (
    <>
      <div className="header-container">
        <Link to="/" className="header-text">
          Where In The World?
        </Link>
        <button className="dark-mode-button">
          <i className="fa-regular fa-moon"></i> dark mode
        </button>
      </div>
      <div className="search-country">
        {params.id ? null : (
          <>
            <select name="continent" className="region-filter" onClick={handleFilter}   >
              <option value="All">
                All Countries
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </>
        )}
      </div>
    </>
  );
}
