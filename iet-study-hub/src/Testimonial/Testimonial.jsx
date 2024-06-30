import "./Testimonial.css"
import messageBoxVideo from "../assets/3d-integrate-night.mp4"
import { useEffect } from "react"

// let currentPage = 0




const Testimonial = () =>
{
  useEffect(()=>{
    const messageVideo = document.querySelector(".messageVideo")
    let currentPage = 0
    window.addEventListener("scroll", ()=>{
      const newPage = Math.round(scrollY/window.innerHeight)
      if(newPage !== currentPage){
        currentPage = newPage
        messageVideo.currentTime = 0
        messageVideo.play() 
        // console.log(currentPage, newPage)      
      }
    
    })
    
  },[])
  

  return(
    <div className="mgB5 flexC gap4">
      <div className="text-sm1 text-slate-11 text-center">
        <div>Need something</div>
        <div>connect with us and we will provide it.</div>
      </div>
      <div className="p2Main">
        <div className="flexC gap1 alignC">
          <div className="Video"><video src={messageBoxVideo} muted onContextMenu={e => e.preventDefault()} disablePictureInPicture={true} className="messageVideo"></video></div>
          <div className="text-medium text-center">We have students <span className="text-violet-a11">Trust</span></div>
          <div className="text-sm1 text-slate-11 text-center">Reviews of students who have used this platform for their needs</div>
        </div>
        <div className="yearBox text-slate-12 text-sm0">
          <div className="bigBox snake">
            <div className="yearCount text-green-a9">1</div>
            <div >First Year</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial