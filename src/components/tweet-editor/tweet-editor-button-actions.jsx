import Button from "../Buttons/button"

import mediaIcon from "../../assets/icons/Media.svg"
import gifIcon from "../../assets/icons/Gif.svg"
import pollIcon from "../../assets/icons/Poll.svg"
import emojiIcon from "../../assets/icons/Emoji.svg"
import scheduleIcon from "../../assets/icons/Schedule.svg"
function TweetEditorButton() {
  return (
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
        <button>
          <img src={mediaIcon} alt="" />
        </button>
        <button>
          <img src={gifIcon} alt="" />
        </button>
        <button>
          <img src={pollIcon} alt="" />
        </button>
        <button>
          <img src={emojiIcon} alt="" />
        </button>
        <button>
          <img src={scheduleIcon} alt="" />
        </button>
      </div>
      <Button backgroundColor="#1d9bf0" content="Tweet" textColor="#fff" />
    </div>
  );
}

export default TweetEditorButton;