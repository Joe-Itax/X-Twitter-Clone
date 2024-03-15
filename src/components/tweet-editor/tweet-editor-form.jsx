import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";

import globalContext from "../../contexts/tweets-context";
import currentUserContext from "../../contexts/current-user-context";

import Input from "./input-tweet-editor-form";
import TweetEditorButton from "./tweet-editor-button-actions";

function TweetEditorForm({}) {
  const [newTweetContent, setNewTweetContent] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const { tweets } = useContext(globalContext);
  const { currentUser } = useContext(currentUserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleNewTweet = (newTweetContent) => {
    try {
      const newTweetId = Math.max(...tweets.map((tweet) => tweet.id)) + 1;
      const newTweet = {
        id: newTweetId,
        slug: currentUser.slug,
        tweetTitleAuthor: currentUser.pseudo,
        pseudo: currentUser.pseudo,
        userName: currentUser.userName,
        dateTime: "1m",
        tweetText: newTweetContent,
        replyValue: "0",
        retweetValue: "0",
        reactValue: 0,
        isLiked: false,
        tweetImage: null,
        tweetAvatar: currentUser.profileImage,
        profileImage: currentUser.profileImage,
        couvertureImage: currentUser.couvertureImage,
      };

      tweets.push(newTweet);
      //console.log("tweets nouveaux: ", tweets)
      axios
        .post("https://65b90362b71048505a89fa29.mockapi.io/tweets", newTweet)
        .then((res) => console.log("tweet poster avec succes!!", res));
      //console.log("Nouveau tweet ajouté au context !");
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'ajout du tweet au Context :", error);
    }
  };

  useEffect(() => {
    if (errors.new_tweet) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [errors.new_tweet]);

  const onSubmit = (data) => {
    // console.log("data: ", data)
    handleNewTweet(data.new_tweet);
  };

  return (
    <form
      className="tweet-editor-form flex-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input register={register} />
      <TweetEditorButton canSubmit={canSubmit} />
      {errors.new_tweet?.message && (
        <p className="text-red-500 text-[0.8rem]">{errors.new_tweet.message}</p>
      )}
    </form>
  );
}

export default TweetEditorForm;
