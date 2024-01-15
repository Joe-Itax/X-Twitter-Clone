//import "./button.css"

function Button({ addClassName, backgroundColor, textColor, content }) {
  return (
    <button
      id="btnComponent"
      className={`${
        addClassName || ""
      } capitalize cursor-pointer text-[0.87rem] px-4 py-2 xl:text-base font-bold xl:px-6 xl:py-[0.7rem] rounded-[50px] border-[none]`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {content}
    </button>
  );
}

export default Button;
