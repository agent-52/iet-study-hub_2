import "./Page2.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom"
import { Year1Grid} from "../Year1Grid/Year1Grid"
import Year2Grid from "../Year2Grid/Year2Grid"
import world from "../assets/3d-control.mp4"
import { year1ArrayFull, year1Batch1Array, year1Batch2Array } from "../SubjectArrays/SubjectArrays";
const Page2 = () =>
{
  const {name} = useParams();
  const [year1Array, setYear1Array] = useState(year1Batch1Array)
  const updateYear1Array = (array) =>{
    setYear1Array(array)
  }

  return(
    <div className="page2 flexC gap4">
      <div className="text-sm1 text-slate-11 text-center">
        <div>Missing something</div>
        <div>it will be here before exams.</div>
      </div>
      <div className="p2Main">
        <div className="flexC gap1 alignC">
          <div className="Video"><video src={world} autoPlay loop muted onContextMenu={e => e.preventDefault()} disablePictureInPicture={true}></video></div>
          <div className="text-medium text-center">Choose your <span className="text-green-a9">Arena</span></div>
          <div className="text-sm1 text-slate-11 text-center">All the resources you need to manage your academics like pyqs, notes, assignments, projets, videos and much more</div>
        </div>
        <div className="yearBox text-slate-12 text-sm0">
          <Link className="textDecNone" to="../page2/year1">
            <div className="bigBox snake">
              <div className="yearCount text-green-a9">1</div>
              <div >First Year</div>
            </div>
          </Link>
          <Link className="textDecNone" to="../page2/year2">
            <div className="bigBox">
              <div className="yearCount">2</div>
              <div>Second Year</div>
            </div>
          </Link>
          <div className="bigBox">
            <div className="yearCount">3</div>
            <div >Third Year</div>
          </div>
          <div className="bigBox">
            <div className="yearCount">4</div>
            <div >Fourth Year</div>
          </div>
        </div>
      </div>
      <div className="p2Grid">
        {/* {name === "year1Grid" ? (
          <Year1Grid onClick={updateYear1Array} array={year1Array}/>
        ): name === "year2Grid" ? (
          <Year2Grid />
        ):(
          <Year1Grid array={year1Array} onClick={updateYear1Array}/>
        )} */}
        <Outlet/>
      </div>
    </div>
  )
}

export default Page2