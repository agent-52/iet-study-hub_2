import Header from "./src/Header/Header.jsx"
import Button from "./src/Button/Button.jsx"
import { Link } from "react-router-dom"
const ErrorPage = () =>
{

  return(
    <div className="body text-slate-12 background font-sans pi1 flexC gap4"> 
      <Header/>
      <div className=" flexC gap4 alignC">
      <div className="text-medium text-center flexC gap2 ">
        <div>Coming Soon!</div>
        <div className="text-medium1">you may see this page in following cases :</div>
        <div className="text-sm1 flexC gap1">
          <div><span className="text-slate-11">01.</span> Clicked on a link that has not been assigned yet. we are arranging content as of now and some content may be missing ( it will be there before your exams ) </div>
          <div><span className="text-slate-11">02.</span> Network error ( just reload again or visit "ietstudyhub.com" again )</div>
        </div>
      </div>
      <div className="text-sm text-center">"We are a small team dedicated to organizing all the content you may need. If you'd like to contribute or have any suggestions, we welcome your input and would love for you to be part of this effort."</div>
      <Link to="/" className="textDecNone"><Button text="Back Home"/></Link>
      </div>
    </div>
  )
}

export default ErrorPage