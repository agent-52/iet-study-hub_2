import "./Page2.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom"
import Year1Grid from "../Year1Grid/Year1Grid"
import Year2Grid from "../Year2Grid/Year2Grid"
import world from "../assets/3d-control.mp4"
import si1 from "../assets/subImages/5 (12).png"

const Page2 = () =>
{
  const {name} = useParams();
  const year1ArrayFull = [
    {
      subCode: "1AMRC1",
      subName: "Appled Mathematics-I",
      src: si1,
      teachers:["Divyani Badjatiya","Salika Ansari","Anas Khan"],
    },
    {
      subCode: "1MERC3",
      subName: "Elements of Mechanical engg.",
      src: si1,
      teachers:["Jyoti Soni","Ibrahim Hussain","Nagenfra Sohani", "Santosh Kansal"],
    },
    {
      subCode: "1ETRC4",
      subName: "Basic Electronics",
      src: si1,
      teachers:["Amit Jha","Astha Gupta"],
    },
    {
      subName: "Chemistry",
      subCode: "1ACRC2",
      src: si1,
      teachers:["Dheeraj Mandloi","Jitendra Singh"],
    },
    {
      subName: "Technical English",
      subCode: "1SSRS1",
      src: si1,
      teachers:["Ruchi Singh"],
    },
    {
      subName: "Applied Physics",
      subCode: "2APRC2",
      src: si1,
      teachers:["Rachna Gupta","Shailendra Khinchi"],
    },
    {
      subName: "Humanities",
      subCode: "2SSRS2",
      src: si1,
      teachers:["Aarti Saran", "Asmita Agrawal"],
    },
    {
      subName: "Engineering Drawing",
      subCode: "2MERC3",
      src: si1,
      teachers:["Omprakash"],
    },
    {
      subName: "Electrical Engineering",
      subCode: "2EIRC4",
      src: si1,
      teachers:["Ajay Verma", "Surekha patil", "Nitin", "Tapesh Sarsodiya"],
    },
    {
      subName: "Computer Programming",
      subCode: "2CORC5",
      src: si1,
      teachers:["Manoj Pawaiya"],
    },
    {
      subName: "Applied Mathematics-II",
      subCode: "2AMRC1",
      src: si1,
      teachers:["Chandrashekhar"],
    },
  ]
  const [year1Array, setYear1Array] = useState(year1ArrayFull)
  console.log(year1Array)
  const UpdateYear1Array = () =>{
    
  }
  
  

  return(
    <div className="page2 flexC gap4">
      <div className="text-sm1 text-slate-11 text-center">
        <div>Missing something</div>
        <div>it will be here before exams.</div>
      </div>
      <div className="p2Main">
        <div className="flexC gap1 alignC">
          <div className="worldVideo"><video src={world} autoPlay loop muted onContextMenu={e => e.preventDefault()} disablePictureInPicture={true}></video></div>
          <div className="text-medium text-center">Choose your <span className="text-green-a9">Arena</span></div>
          <div className="text-sm1 text-slate-11 text-center">All the resources you need to manage your academics like pyqs, notes, assignments, projets, videos and much more</div>
        </div>
        <div className="yearBox text-slate-12 text-sm0">
          <div className="bigBox snake">
            <div className="yearCount text-green-a9">1</div>
            <div >First Year</div>
          </div>
          <div className="bigBox">
            <div className="yearCount">2</div>
            <div>Second Year</div>
          </div>
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
        {name === "year1Grid" ? (
          <Year1Grid />
        ): name === "year2Grid" ? (
          <Year2Grid />
        ):(
          <Year1Grid array={year1ArrayFull}/>
        )}
      </div>
    </div>
  )
}

export default Page2