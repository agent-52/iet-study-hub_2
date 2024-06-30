import "./Header.css"
import Button from "../Button/Button"
const Header = () =>
{


  return(
    <div className="header">
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
  )
}

export default Header