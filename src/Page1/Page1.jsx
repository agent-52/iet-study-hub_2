import Button from "../Button/Button"
import cubeVideo from "../assets/cube1.1.mp4"
import { Link } from "react-router-dom"
import Cube from "../Cube/Cube"
import "./Page1.css"
import { useEffect } from "react"


/**
 * Page1
 */
const Page1 = () =>
{
  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      // if(window.innerWidth <= 800){
      //   document.querySelector(".threejsCube").classList.add("hidden")
      //   document.querySelector(".threejsCube").classList.remove("visible")
      // }else{
      //   document.querySelector(".threejsCube").classList.add("visible")
      //   document.querySelector(".threejsCube").classList.remove("hidden")
      // }
      // console.log(window.innerWidth)
    })
  })


  return(
    <>
    <div className="page1">
      <div className="p1l">
        <div className="gradientBorderWrapper">
          <div className="gradientBorder background">Introducing IET Study Hub</div>
        </div>
        <div className="text-large font-gradient font-effect-hero nowrap">
          <div className="heading">Collection of</div>
          <div className="heading">your resources</div>
        </div>
        <div className="text-sm1 text-slate-11">
          <div>The all in one place for all your study problems.</div>
          <div>Study whenever you feel like it.</div>
        </div>
        <div className="navDesktop">
          <Button text="Contribute >" version={1}/>
          <Button text="Documentation >" version={2}/>
        </div>
      </div>
      <div className="p1r">
        <div className="threejsCube"><Cube/></div>
        </div>
    </div>
    <div className="text-slate-11 text-center text-sm p1bt">We Got <span className="slate">Your</span> Back</div>
    </>
    
  )
}

export default Page1