import "./Header.css"
import Button from "../Button/Button"
const Header = () =>
{


  return(
    <div>
    <div className="header noWrap">
      <div className="logo text-m1 font-medium1">IET Study Hub</div>
      <div className="navDesktop">
        <div className="font-medium text-sm text-slate-11">About</div>
        <div className="font-medium text-sm text-slate-11">Team</div>
        <div className="font-medium text-sm text-slate-11">Years</div>
        <div className="font-medium text-sm text-slate-11">Resources</div>
        <div className="font-medium text-sm text-slate-11">Updates</div>
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