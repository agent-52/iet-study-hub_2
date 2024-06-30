import "./Year1Grid.css"
import { useState , useEffect} from "react"
import { year1ArrayFull, year1Batch1Array, year1Batch2Array } from "../SubjectArrays/SubjectArrays";
import { Link } from "react-router-dom";
import Button from "../Button/Button"

const Year1Grid = ({array=[], onClick}) =>
{
  const updateUrl = (subject, teacher) =>{
    subject.url = `/${subject.subCode}${teacher.split(" ")[0]}`
    console.log(subject.url)
  }
  useEffect(()=>{
        
    const bwButtons = Array.from(document.querySelectorAll(".buttonBox2>div"))
    // const firstInputArray = Array.from(document.querySelectorAll(".teacherBox"))

    // for (const inputDiv of firstInputArray) {
    //   inputDiv.firstChild.firstChild.checked = true
    // }
    //  firstInput.checked = true
    for (const button of bwButtons) {
      button.addEventListener("click",()=>{
        for (const button of bwButtons){
          button.id = ""
        }
        button.id = "active2"
      })
    }

  })
 
  // const updateSelectedTeacher = (teacher) =>
  // {
  //   setSelectedTeacher(teacher)
  //   console.log(selectedTeacher)
  // }

  return(
    < div className="flexC gap4 alignC">
      <div className="buttonBox2 text-sm">
          <div id="active2" onClick={() =>{onClick(year1Batch1Array)}}>Batch-I</div>
          <div onClick={() =>{onClick(year1Batch2Array)}}>Batch-II</div>
      </div>
      <div className="flexibleGrid">
        {array.map((subject) => {
        return(
          <div key={subject.subCode} className="flexC alignC gap0 text-slate-12 text-sm1 subBox">
            <div className="subImageBox"><img className="subImage" src={subject.src} alt="" /></div>
            <div>{subject.subCode}</div>
            <div className="text-slate-11">{subject.subName}</div>
            <div>{subject.teachers.map((teacher) =>{
              return(
                <Link to={`/${subject.subCode}${teacher.split(" ")[0]}`} key={teacher} className="textDecNone text-slate-12 teacherName"><div className="gap0 flex">
                  <input type="radio" id={teacher} name={subject.subCode} value={teacher}/>
                  
                  <label htmlFor={teacher}>{teacher}</label>
                </div></Link>
              )
            })}</div>
            {/* <Link to={subject.url}><Button text="Explore" version={2} /></Link> */}
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default Year1Grid