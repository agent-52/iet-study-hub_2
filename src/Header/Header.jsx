import "./Header.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
const Header = () =>
{


  return(
    <div>
    <div className="header noWrap">
      <Link className="textDecNone" to="/"><div className="logo text-m1 font-medium1">IET Study Hub</div></Link>
      <div className="navDesktop">
        <Link to="" className="textDecNone"><div className="font-medium text-sm text-slate-11">About</div></Link>
        <Link to="/team" className="textDecNone"><div className="font-medium text-sm text-slate-11">Team</div></Link>
        <Link to="" className="textDecNone"><div className="font-medium text-sm text-slate-11">Years</div></Link>
        <Link to="" className="textDecNone"><div className="font-medium text-sm text-slate-11">Assignments</div></Link>
      </div>
      <div className="navDesktop">
        <Button text="Sign in" version={2}/>
        <Button text="Contribute >" version={1}/>
      </div>
    </div>

    <div className="header2">
      <div className="logo text-m1 font-medium1">IET Study Hub</div>
      <div className="navMobile">
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </div>

    </div>

    
  )
}

export default Header