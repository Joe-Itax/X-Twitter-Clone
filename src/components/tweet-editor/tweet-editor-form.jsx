import { useState } from "react";

import Input from "./input-tweet-editor-form";
import TweetEditorButton from "./tweet-editor-button-actions";

function TweetEditorForm({}) {
  const [newTweetContent, setNewTweetContent] = useState();
  function addNewTweet(e) {
    e.prevent.default();
    console.log(newTweetContent);
  }
  return (
    <form className="tweet-editor-form flex-auto">
      <Input customOnChange={(e) => setNewTweetContent(e.target.value)} />
      <TweetEditorButton submitNewTweet={addNewTweet} />
    </form>
  );
}

export default TweetEditorForm;
