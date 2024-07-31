import "./Button.css"

const Button = ({text, version=1, link}) =>
{
  if(version == 1){
    return(
      <a href={link} className="textDecNone"><button className="button1 text-sm">{text}</button></a>
    )
  }else{
    return(
      <a href={link} className="textDecNone"><button className="button2 text-sm">{text}</button></a>
    )
  }
  
}

export default Button