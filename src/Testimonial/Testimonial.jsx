import "./Testimonial.css"
import messageBoxVideo from "../assets/3d-integrate-night.mp4"
import { useEffect } from "react"

import testimonial1i from "../assets/testimonial/4.png"

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
        
        <div className=" text-sm testimonialBox text-slate-11 flex gap2">
          <div className="testimonial flexC gap2 ">
            <div className="">"Amazing website! it helped me alot for PYQs and notes! Everything is very easily accessible and user friendly. It is very resourceful. All the PYQs of MSTs and End Sem exams were uploaded in time in high quality. it also helped with providing some great links to youtube playlists in case students want to understand a particular topic. Overall i highly recommend it! Thanks for all the help!"</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Aakhya</span> Sharma</div>
                <div>2023-2027 Cse-B</div>
              </div>
            </div>
          </div>
          <div className="testimonial flexC gap2">
            <div className="">"IET Study Hub has been an absolute blessing throughout my Computer science journey. The notes are incredibly thorough and well-organized, covering every aspect of my course with clarity. What really stood out for me were the past year question sets—they not only helped me understand the exam format but also sharpened my problem-solving skills. Thanks to IET Study Hub, I feel well-prepared and confident heading into my exams."</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Siddharth </span> Verma</div>
                <div>Cse-B 2023-2027</div>
              </div>
            </div>
          </div>
          <div className="testimonial flexC gap2">
            <div className="">"I can't recommend IET Study Hub enough to my fellow It students. The notes provided are comprehensive and include all the key concepts and formulas essential for exams. The past year question papers were instrumental in helping me identify important topics and understand the exam structure better. Using IET Study Hub has truly enhanced my learning experience and significantly boosted my grades."</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Shreyansh</span> Gupta</div>
                <div>It-B 2023-2027</div>
              </div>
            </div>
          </div>
          <div className="testimonial flexC gap2">
            <div className="">"IET Study Hub has been my go-to resource for electrical engineering studies. The notes are not only detailed but also easy to comprehend, which has made learning complex algorithms and programming languages much more manageable. The extensive collection of past year questions provided valuable insight into the types of questions I could expect in exams, allowing me to tailor my study sessions effectively."</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Pranshu</span> Gupta</div>
                <div>Etc-B 2023-2027</div>
              </div>
            </div>
          </div>
          <div className="testimonial flexC gap2">
            <div className="">"Choosing IET Study Hub was one of the best decisions I made for my civil engineering studies. The notes are structured in a way that simplifies even the most intricate topics, and the inclusion of practical examples makes learning enjoyable. The past year question sets were invaluable—they not only tested my knowledge but also helped me identify areas needing more focus."</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Aaditya</span> Sahu</div>
                <div>Civil 2023-2027</div>
              </div>
            </div>
          </div>
          <div className="testimonial flexC gap2">
            <div className="">"IET Study Hub has been an absolute blessing throughout my Computer science journey. The notes are incredibly thorough and well-organized, covering every aspect of my course with clarity. What really stood out for me were the past year question sets—they not only helped me understand the exam format but also sharpened my problem-solving skills. Thanks to IET Study Hub, I feel well-prepared and confident heading into my exams."</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Tanya</span> Kesharwani</div>
                <div> Cse-A 2023-2027</div>
              </div>
            </div>
          </div>
          <div className="testimonial flexC gap2">
            <div className="">"Choosing IET Study Hub was one of the best decisions I made for my Civil engineering studies. The notes are structured in a way that simplifies even the most intricate topics, and the inclusion of practical examples makes learning enjoyable. The past year question sets were invaluable—they not only tested my knowledge but also helped me identify areas needing more focus."</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Vishal</span> Mangrole</div>
                <div>Civil 2023-2027</div>
              </div>
            </div>
          </div>
          <div className="testimonial flexC gap2">
            <div className="">"Choosing IET Study Hub was one of the best decisions I made for my Ei studies. The notes are structured in a way that simplifies even the most intricate topics, and the inclusion of practical examples makes learning enjoyable. The past year question sets were invaluable—they not only tested my knowledge but also helped me identify areas needing more focus."</div>
            <div className="flex gap1">
              <div className="imgBox"><img src={testimonial1i} alt="" /></div>
              <div className="flexC justify-between">
                <div className="text-slate-12"><span className="text-violet-a11 font-medium1">Piyush</span> Mesram</div>
                <div>Ei 2023-2027</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial