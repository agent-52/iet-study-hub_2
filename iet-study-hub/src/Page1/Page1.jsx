import Button from "../Button/Button"
import cubeVideo from "../assets/cube1.1.mp4"
import "./Page1.css"


const Page1 = () =>
{


  return(
    <>
    <div className="page1">
      <div className="p1l">
        <div className="gradientBorderWrapper">
          <div className="gradientBorder background">Introducing IET Study Hub</div>
        </div>
        <div className="text-large font-gradient font-effect-hero">
          <div>Collection of</div>
          <div>your resources</div>
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
      <div className="p1r"><video src={cubeVideo} className="cubeVideo" autoPlay loop muted></video></div>
    </div>
    <div className="text-slate-11 text-center text-sm">We Got <span className="slate">Your</span> Back</div>
    </>
    
  )
}

export default Page1