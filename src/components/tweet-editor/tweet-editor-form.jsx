import mediaIcon from "../../assets/icons/Media.svg"
import gifIcon from "../../assets/icons/Gif.svg"
import pollIcon from "../../assets/icons/Poll.svg"
import emojiIcon from "../../assets/icons/Emoji.svg"
import scheduleIcon from "../../assets/icons/Schedule.svg"



function Input() {
  return (
    <input
      type="text"
      placeholder="What's happening?"
      className="tweet-editor-input"
    />
  );
}

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
      <button className="button">Tweet</button>
    </div>
  );
}

function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
      <Input />
      <TweetEditorButton />
    </div>
  );
}

export default TweetEditorForm;
