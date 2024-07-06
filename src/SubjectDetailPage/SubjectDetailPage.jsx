import Header from "../Header/Header.jsx"
import "./SubjectDetailPage.css"
import ytLogo from "../assets/logos/ytLogo1.png"
import docLogo from "../assets/logos/docLogo.png"
import reactVideo from "../assets/3d-react.mp4"
import { useEffect } from "react"


const SubjectDetailPage = ({array, teacher, linksArray}) =>{

  useEffect(()=>{
    const noteLinkArray = Array.from(document.querySelectorAll(".noteLink"))
    for (let i=0; i< noteLinkArray.length; i++) {
      noteLinkArray[i].href = linksArray[i]
    }
  },[])

  return(
    <div className="body text-slate-12 background font-sans pi1 flexC gap3">
      <Header />
      <div className="flexC gap1 alignC">
        <div className="Video"><video src={reactVideo} autoPlay loop muted onContextMenu={e => e.preventDefault()} disablePictureInPicture={true}></video></div>
        <div className="text-medium text-center">Here are your <span className="text-blue-a10">Resources</span></div>
        <div className="text-sm1 text-slate-11 text-center">All the pyqs, notes, assignments, projets related to <span className="font-medium1">{teacher}</span></div>
      </div>
      <div className="flexC alignC gap1 text-sm1">
        {array.map((unit)=>{
          return(
            <div className="unitBlock" key={unit.unit}>
              <div>Unit{unit.unit}</div>
              <div>{unit.name}</div>
              <div className="smallImageBox"><a href={unit.yt}><img src={ytLogo} alt="yt link" /></a></div>
              <div className="smallImageBox"><a className="noteLink" href=""><img src={docLogo} alt="pdf link" /></a></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SubjectDetailPage