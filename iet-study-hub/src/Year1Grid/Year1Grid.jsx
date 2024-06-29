import "./Year1Grid.css"
import { useState } from "react"
import Button from "../Button/Button"

const Year1Grid = ({array=[]}) =>
{
  console.log("array is here", array)
  return(
    <>
    {array.map((subject) => {
      return(
        <div key={subject.subCode} className="flexC alignC gap0 text-slate-12 text-sm1 subBox">
          <div className="subImageBox"><img src={subject.src} alt="" /></div>
          <div>{subject.subCode}</div>
          <div className="text-slate-11">{subject.subName}</div>
          <div className="">{subject.teachers.map((teacher) =>{
            return(
              <div className="gap0 flex" key={teacher}>
                <input type="radio" id={teacher} name={subject.subCode} value={teacher}/>
                
                <label htmlFor={teacher}>{teacher}</label>
              </div>
            )
          })}</div>
          <Button text="Explore >" version={2}/>
        </div>
      )
    })}</>
  )
}

export default Year1Grid