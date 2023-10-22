import React from "react";
import Layout from "./Components/Layout";
import MainContent from "./Components/MainContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentDetail from "./Components/ContentDetail";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainContent/>}/>
            <Route path=":id" element={<ContentDetail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
