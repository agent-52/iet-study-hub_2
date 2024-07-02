import "./Year2Grid.css"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { year2CseBatch1Array, year2CseBatch2Array} from "../SubjectArrays/SubjectArrays"


const DisplayGrid2 = ({array=[], year, branch, batch,  b1Id="", b2Id="", b3Id="", b4Id="", b5Id="", b6Id="" , b1_1Id="", b2_2Id="" }) =>
{
  return(
    < div className="flexC gap4 alignC">
      <div className="buttonBox2 text-sm">
          <Link className="textDecNone" id={b1Id} to={`/year${year}/cse/batch1`}><div>CSE</div></Link>
          <Link className="textDecNone" id={b2Id} to={`/year${year}/it/batch1`}><div>IT</div></Link>
          <Link className="textDecNone" id={b3Id} to={`/year${year}/etc/batch1`}><div>ETC</div></Link>
          <Link className="textDecNone" id={b4Id} to={`/year${year}/ei/batch1`}><div>EI</div></Link>
          <Link className="textDecNone" id={b5Id} to={`/year${year}/mech/batch1`}><div>MECH</div></Link>
          <Link className="textDecNone" id={b6Id} to={`/year${year}/civil/batch1`}><div>CIVIL</div></Link>
      </div>
      <div className="buttonBox2 text-sm">
        <Link className="textDecNone" id={b1_1Id} to={`/year${year}/${branch}/batch1`}><div>Sem-III</div></Link>
        <Link className="textDecNone" id={b2_2Id} to={`/year${year}/${branch}/batch2`}><div>Sem-IV</div></Link>           
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
              <Link to={`/${year}/${branch}//${subject.subCode}${teacher.split(" ")[0]}`} key={teacher} className="textDecNone text-slate-12 teacherName"><div className="gap0 flex">
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
const Year2Grid = ({year=2, }) =>
{
  const {name1, name2} = useParams()
  return(
    
    <div>
      {(name1 == "cse" && name2 == "batch1")?
        <DisplayGrid2 array={year2CseBatch1Array} b1Id="active2" branch="cse" year={2} batch="batch1" b1_1Id="active2"/>:
        (name1 == "cse" && name2 == "batch2")?
        <DisplayGrid2 array={year2CseBatch2Array} b1Id="active2" branch="cse" year={2} batch="batch1" b2_2Id="active2"/>:
        <DisplayGrid2 array={year2CseBatch1Array} b1Id="active2" branch="cse" year={2} batch="batch1" b1_1Id="active2"/>
        
      }
    </div> 
    
  )
  
}

export {Year2Grid, DisplayGrid2}