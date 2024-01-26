import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import globalContext from "../../contexts/global-context"

import Input from "./input-tweet-editor-form";
import TweetEditorButton from "./tweet-editor-button-actions";


function TweetEditorForm({ }) {
  const [newTweetContent, setNewTweetContent] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const { tweets } = useContext(globalContext);

  const navigate = useNavigate();

  const handleNewTweet = (newTweetContent) => {

    try {

      const newTweetId = Math.max(...tweets.map((tweet) => tweet.id)) + 1;
      const newTweet = {
        id: newTweetId,
        slug: "CNN",
        tweetTitleAuthor: "CNN",
        pseudo: "CNN",
        userName: "@CNN",
        dateTime: "1m",
        tweetText: newTweetContent,
        replyValue: "0",
        retweetValue: "0",
        reactValue: 0,
        tweetImage: null,
        tweetAvatar: "src/assets/images/tweet-profile-photo.png",
        profileImage: "src/assets/images/tweet-profile-photo.png",
        couvertureImage: null,
      };

      tweets.unshift(newTweet);
      console.log("tweets nouveaux: ", tweets)

      console.log("Nouveau tweet ajouté au context !");
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'ajout du tweet au Context :", error);
    }
  }

  useEffect(() => {
    setCanSubmit(newTweetContent.trim() !== "");
  }, [newTweetContent]);

  const addNewTweet = (e) => {
    e.preventDefault();
    handleNewTweet(newTweetContent);
    setNewTweetContent('');
  };

  return (
    <form className="tweet-editor-form flex-auto" onSubmit={addNewTweet}>
      <Input value={newTweetContent} customOnChange={(e) => setNewTweetContent(e.target.value)} />
      <TweetEditorButton canSubmit={canSubmit} submitNewTweet={addNewTweet} />
    </form>
  );
}

export default TweetEditorForm;
