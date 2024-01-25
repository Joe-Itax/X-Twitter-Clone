import Button from "../Buttons/button";

import mediaIcon from "../../assets/icons/Media.svg";
import gifIcon from "../../assets/icons/Gif.svg";
import pollIcon from "../../assets/icons/Poll.svg";
import emojiIcon from "../../assets/icons/Emoji.svg";
import scheduleIcon from "../../assets/icons/Schedule.svg";
function TweetEditorButton({ submitNewTweet, canSubmit }) {
  return (
    <div className="tweet-editor-buttons flex items-center justify-between">
      <div className="tweet-editor-actions flex items-center justify-start gap-4">
        <button className="bg-transparent border-[none]">
          <img src={mediaIcon} alt="" />
        </button>
        <button className="bg-transparent border-[none]">
          <img src={gifIcon} alt="" />
        </button>
        <button className="bg-transparent border-[none]">
          <img src={pollIcon} alt="" />
        </button>
        <button className="bg-transparent border-[none]">
          <img src={emojiIcon} alt="" />
        </button>
        <button className="bg-transparent border-[none]">
          <img src={scheduleIcon} alt="" />
        </button>
      </div>
      <Button
        backgroundColor={canSubmit ? "#1d9bf0" : "rgb(29 155 240 / 53%)"}
        content="Tweet"
        textColor="#fff"
        typeButton={"submit"}
        customOnSubmit={submitNewTweet}
        canSubmitDisabled={canSubmit}
      />
    </div>
  );
}

export default TweetEditorButton;
