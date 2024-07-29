import Header from "../Header/Header.jsx"
import "./SubjectDetailPage.css"
import ytLogo from "../assets/logos/ytLogo1.png"
import docLogo from "../assets/logos/docLogo.png"
import reactVideo from "../assets/3d-react.mp4"
import { useEffect } from "react"


const SubjectDetailPage = ({array, teacher, linksArray , pyqYearArray=[2023], pyq2023Array=[]}) =>{

  useEffect(()=>{
    const noteLinkArray = Array.from(document.querySelectorAll(".noteLink"))
    for (let i=0; i< noteLinkArray.length; i++) {
      noteLinkArray[i].href = "/"+linksArray[i]
    }

    const pyq2023LinkArray = Array.from(document.querySelectorAll(".pyq2023"))
    for (let i=0; i< pyq2023LinkArray.length; i++) {
      pyq2023LinkArray[i].href = "/"+pyq2023Array[i]
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
              <div className="smallImageBox"><a className="noteLink" href="" target="_blank" rel="noopener noreferrer" ><img src={docLogo} alt="pdf link"/></a></div>
            </div>
          )
        })}
      </div>
      {/* <div className=" gap1 text-medium1 pyqHeading">
        <div>Exams</div>
        <div>Year</div>
        <div>Pyq</div>
        <div>Solution</div>
      </div> */}
      
        {pyqYearArray.map((year) =>{
          return( 
            <div className="flexC alignC gap1 text-sm1 noWrap mgB1" key={year} > 
              <div className="unitBlock">
                <div>Mst-1</div>
                <div>{year}</div>
                <div><a id="textDecNone" className={`pyqSolution${year}`} href="">Solution</a></div>
                <div className="smallImageBox"><a className={`pyq${year}`} href="" target="_blank" rel="noopener noreferrer"><img src={docLogo} alt="pdf link" /></a></div>
              </div>
              <div className="unitBlock">
                <div>Mst-2</div>
                <div>{year}</div>
                <div><a id="textDecNone" className={`pyqSolution${year}`} href="">Solution</a></div>
                <div className="smallImageBox"><a className={`pyq${year}`} href="" target="_blank" rel="noopener noreferrer"><img src={docLogo} alt="pdf link" /></a></div>
              </div>
              <div className="unitBlock">
                <div>Mst-3</div>
                <div>{year}</div>
                <div><a id="textDecNone" className={`pyqSolution${year}`} href="">Solution</a></div>
                <div className="smallImageBox"><a className={`pyq${year}`} href="" target="_blank" rel="noopener noreferrer"><img src={docLogo} alt="pdf link" /></a></div>
              </div>
              <div className="unitBlock">
                <div>End-Sem</div>
                <div>{year}</div>
                <div><a id="textDecNone" className={`pyqSolution${year}`} href="">Solution</a></div>
                <div className="smallImageBox"><a className={`pyq${year}`} href="" target="_blank" rel="noopener noreferrer"><img src={docLogo} alt="pdf link" /></a></div>
              </div>
            </div>
                
          )
        })}
      
      
    </div>
  )
}

export default SubjectDetailPage