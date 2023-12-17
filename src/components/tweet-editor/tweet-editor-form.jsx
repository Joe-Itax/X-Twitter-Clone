import Input from "./input-tweet-editor-form"
import TweetEditorButton from "./tweet-editor-button-actions"

function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
      <Input />
      <TweetEditorButton />
    </div>
  );
}

export default TweetEditorForm;
