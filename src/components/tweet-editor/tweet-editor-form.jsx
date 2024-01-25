import { useState, useEffect } from "react";

import Input from "./input-tweet-editor-form";
import TweetEditorButton from "./tweet-editor-button-actions";

function TweetEditorForm({ }) {
  const [newTweetContent, setNewTweetContent] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  // console.log("newTweetContent", newTweetContent);
  useEffect(() => {
    setCanSubmit(newTweetContent.trim() !== "");
  }, [newTweetContent]);

  const addNewTweet = (e) => {
    e.preventDefault();
    setNewTweetContent('');
    console.log("New tweet submitted! content::: ", newTweetContent);
  };

  return (
    <form className="tweet-editor-form flex-auto">
      <Input value={newTweetContent} customOnChange={(e) => setNewTweetContent(e.target.value)} />
      <TweetEditorButton canSubmit={canSubmit} submitNewTweet={addNewTweet} />
    </form>
  );
}

export default TweetEditorForm;
