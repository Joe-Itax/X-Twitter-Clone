
function Input({ customOnChange, value }) {
  return (
    <input
      type="text"
      placeholder="What's happening?"
      className="tweet-editor-input h-[60px] w-full text-[1.3rem] bg-[black] text-[white] resize-none mx-0 my-[13px] pt-2.5 pb-0 px-0 border-[none] outline-none"
      onChange={customOnChange}
      value={value}
    />
  );
}

export default Input;