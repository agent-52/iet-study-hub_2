import "./Year1Grid.css"
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom";
import {year1Batch1Array, year1Batch2Array } from "../SubjectArrays/SubjectArrays";
import { Link} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Button from "../Button/Button"

const DisplayGrid = ({array=[], batch, b1Id="", b2Id="" }) =>{

  return(
    < div className="flexC gap4 alignC">
      <div className="buttonBox2 text-sm">
          <Link className="textDecNone" id={b1Id} to={"/year1/batch1"}><div>Batch-I</div></Link>
          <Link className="textDecNone" id={b2Id} to={"/year1/batch2"}><div>Batch-II</div></Link>
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
                <Link to={`/year1/${batch}/${subject.subCode}${teacher.split(" ")[0]}`} key={teacher} className="textDecNone text-slate-12 teacherName"><div className="gap0 flex">
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
const Year1Grid = ({index=false}) =>
{
  // useEffect(()=>{
        
  //   const bwButtons = Array.from(document.querySelectorAll(".buttonBox2>*"))
  //   // const firstInputArray = Array.from(document.querySelectorAll(".teacherBox"))

  //   // for (const inputDiv of firstInputArray) {
  //   //   inputDiv.firstChild.firstChild.checked = true
  //   // }
  //   //  firstInput.checked = true
  //   for (const button of bwButtons) {
  //     button.addEventListener("click",()=>{
  //       for (const button of bwButtons){
  //         button.id = ""
  //       }
  //       button.id = "active2"
  //     })
  //   }

  // })
 
  
  return(
    <div>
      {index?(<DisplayGrid array={year1Batch1Array} b1Id="active2" batch="batch1"/>):<Outlet />}
    </div>  
    
  )
  
}

export {Year1Grid, DisplayGrid}