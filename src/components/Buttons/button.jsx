//import "./button.css"

function Button({
  addClassName,
  backgroundColor,
  textColor,
  content,
  typeButton,
  customOnSubmit,
  canSubmitDisabled
}) {
  return (
    <button
      id="btnComponent"
      className={`${addClassName || ""
        } ${!canSubmitDisabled ? "cursor-not-allowed" : "cursor-pointer"} capitalize text-[0.87rem] px-4 py-2 xl:text-base font-bold xl:px-6 xl:py-[0.7rem] rounded-[50px] border-[none]`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
      type={typeButton || ""}
      onClick={customOnSubmit}
      disabled={!canSubmitDisabled || false}
    >
      {content}
    </button>
  );
}

export default Button;
