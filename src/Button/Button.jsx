import "./Button.css"

const Button = ({text, version=1}) =>
{
  if(version == 1){
    return(
      <button className="button1 text-sm">{text}</button>
    )
  }else{
    return(
      <button className="button2 text-sm">{text}</button>
    )
  }
  
}

export default Button