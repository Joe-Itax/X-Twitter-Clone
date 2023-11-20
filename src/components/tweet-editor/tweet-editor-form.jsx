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
          <img src="src\assets\Icons\Media.svg" alt="" />
        </button>
        <button>
          <img src="src\assets\Icons\Gif.svg" alt="" />
        </button>
        <button>
          <img src="src\assets\Icons\Poll.svg" alt="" />
        </button>
        <button>
          <img src="src\assets\Icons\Emoji.svg" alt="" />
        </button>
        <button>
          <img src="src\assets\Icons\Schedule.svg" alt="" />
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
