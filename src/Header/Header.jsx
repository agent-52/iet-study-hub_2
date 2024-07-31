import "./Header.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { useEffect, useState } from "react"
import { HashLink } from 'react-router-hash-link';

import backArrow from "../assets/logos/arrow.png"
const Header = () =>
{
  const [navVisibility, setNavVisibility] = useState(false)
  function updateNavVisibilty(){
    if(navVisibility == true){
      setNavVisibility(false)
      document.querySelector(".navBarMobile").classList.add("navHidden")
      console.log("hidden")
    }else{
      setNavVisibility(true)
      document.querySelector(".navBarMobile").classList.remove("navHidden")
      console.log("visible")
    }
  }

  return(
    <div>
    <div className="header noWrap">
      <Link className="textDecNone" to="/"><div className="logo text-m1 font-medium1">IET Study Hub</div></Link>
      <div className="navDesktop">
        <Link to="" className="textDecNone"><div className="font-medium text-sm text-slate-11">About</div></Link>
        <Link to="/team" className="textDecNone"><div className="font-medium text-sm text-slate-11">Team</div></Link>
        <HashLink smooth to="/#page2" className="textDecNone"><div className="font-medium text-sm text-slate-11">Years</div></HashLink>
        <Link to="/sorry" className="textDecNone"><div className="font-medium text-sm text-slate-11">Assignments</div></Link>
      </div>
      <div className="navDesktop">
        <Link to="/sorry" className="textDecNone"><Button text="Sign in" version={2}/></Link>
        <a href="https://www.instagram.com/ietstudyhub?igsh=MWR5b3FnbWoyNTl6aQ==" className="textDecNone"><Button text="Contribute >" version={1}/></a>
      </div>
    </div>

    <div className="header2">
      <Link className="textDecNone" to="/"><div className="logo text-m1 font-medium1">IET Study Hub</div></Link>
      <div className="navMobile" onClick={updateNavVisibilty}>
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </div>

    <div className="navBarMobile navHidden " >
      <div className="navMobile cross" onClick={updateNavVisibilty}>
        <div className="imgBox1"><img src={backArrow} alt="" /></div>
        
      </div>
      <Link to="/" className="textDecNone"><div className="text-medium" onClick={updateNavVisibilty}>Home</div></Link>
      <Link to="/about" className="textDecNone"><div className="text-medium">About</div></Link>
      <Link to="/team" className="textDecNone"><div className="text-medium">Team</div></Link>
      <HashLink smooth to="/#page2" className="textDecNone"><div className="text-medium">Years</div></HashLink>
      
    </div>

    </div>

    
  )
}

export default Header