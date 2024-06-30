import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Testimonial from "../Testimonial/Testimonial";
import { Outlet } from "react-router-dom";
import "./App.css"

const App = () =>
{

  return(
    <div className="body text-slate-12 background font-sans pi1">
      <Header />
      <Page1 />
      <div className="break"></div>
      <Outlet />
      <div className="break"></div>
      <Testimonial />
    </div>
  )
}

export default App