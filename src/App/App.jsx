import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.jsx"
import Page1 from "../Page1/Page1";
import Testimonial from "../Testimonial/Testimonial";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom"
import world from "../assets/3d-control.mp4"
import { year1Batch1Array, year1Batch2Array } from "../SubjectArrays/SubjectArrays";
import "./App.css"
import "../Page2/Page2.css"

const App = () =>
{
  useEffect(()=>{
    document.querySelector(".year1").addEventListener("click", ()=>{
      document.querySelector(".year1").classList.add("snake")
      document.querySelector(".year1>.yearCount").classList.add("text-green-a9")
      document.querySelector(".year2").classList.remove("snake")
      document.querySelector(".year2>.yearCount").classList.remove("text-green-a9")
    })
    document.querySelector(".year2").addEventListener("click", ()=>{
      document.querySelector(".year2").classList.add("snake")
      document.querySelector(".year2>.yearCount").classList.add("text-green-a9")
      document.querySelector(".year1").classList.remove("snake")
      document.querySelector(".year1>.yearCount").classList.remove("text-green-a9")
    })
  })
  const [year1Array, setYear1Array] = useState(year1Batch1Array)
  const updateYear1Array = (array) =>{
    setYear1Array(array)
  }

  return(
    <div className="body text-slate-12 background font-sans pi1">
      <Header />
      <Page1 />
      <div className="break"></div>
      <div className="page2 flexC gap4">
        <div className="text-sm1 text-slate-11 text-center">
          <div>Missing something</div>
          <div>it will be here before exams.</div>
        </div>
        <div className="p2Main" id="page2">
          <div className="flexC gap1 alignC">
            <div className="Video"><video src={world} autoPlay loop muted onContextMenu={e => e.preventDefault()} disablePictureInPicture={true}></video></div>
            <div className="text-medium text-center">Choose your <span className="text-green-a9">Arena</span></div>
            <div className="text-sm1 text-slate-11 text-center">All the resources you need to manage your academics like pyqs, notes, assignments, projets, videos and much more</div>
          </div>
          <div className="yearBox text-slate-12 text-sm0">
            <Link className="textDecNone" to="/year1">
              <div className="bigBox year1">
                <div className="yearCount text-green-a9">1</div>
                <div >First Year</div>
              </div>
            </Link>
            <Link className="textDecNone" to="/year2/cse/batch1">
              <div className="bigBox year2">
                <div className="yearCount">2</div>
                <div>Second Year</div>
              </div>
            </Link>
            <Link className="textDecNone" to="/sorry"><div className="bigBox">
              <div className="yearCount">3</div>
              <div >Third Year</div>
            </div></Link>
            <Link className="textDecNone" to="/sorry"><div className="bigBox">
              <div className="yearCount">4</div>
              <div >Fourth Year</div>
            </div></Link>
          </div>
        </div>
        <div className="p2Grid">
          <Outlet/>
        </div>
      </div>
      <div className="break"></div>
      <Testimonial />
      <div className="break"></div>
      <Footer />
    </div>
  )
}

export default App