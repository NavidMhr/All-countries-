import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  const [darkMode , setDarkMode] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const params = useParams();

  return (
    <>
      <Header />
      {params.id ? null : (
        <input
          className="search-input"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="        search for a country..."
        />
      )}

      <Outlet context={{ filterSearch: inputValue , darkMode }} />
    </>
  );
}
