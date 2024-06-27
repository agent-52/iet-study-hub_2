import "./Button.css"

const Button = ({text, version=1}) =>
{
  if(version == 1){
    return(
      <button className="button1">{text}</button>
    )
  }else{
    return(
      <button className="button2">{text}</button>
    )
  }
  
}

export default Button