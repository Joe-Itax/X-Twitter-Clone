import "./button.css"

function Button({ addClassName, backgroundColor, textColor, content }) {
  return (
    <button id="btnComponent" className={`${addClassName || ""}`} style={{ backgroundColor: backgroundColor, color: textColor }}>{content}</button>
  )
}

export default Button;