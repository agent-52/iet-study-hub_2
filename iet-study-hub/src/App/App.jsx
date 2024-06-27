import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Page1 from "../Page1/Page1";
import "./App.css"

const App = () =>
{
  return(
    <div className="body text-slate-12 background font-sans pi1">
      <Header />
      <Page1 />
    </div>
  )
}

export default App