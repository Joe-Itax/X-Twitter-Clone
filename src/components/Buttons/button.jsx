//import "./button.css"

function Button({ addClassName, backgroundColor, textColor, content }) {
  return (
    <button id="btnComponent" className={`${addClassName || ""} capitalize cursor-pointer text-base font-bold px-6 py-[0.7rem] rounded-[50px] border-[none]`} style={{ backgroundColor: backgroundColor, color: textColor }}>{content}</button>
  )
}

export default Button;