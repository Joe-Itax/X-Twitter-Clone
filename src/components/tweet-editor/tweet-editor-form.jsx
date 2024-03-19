import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";

import tweetsContext from "../../contexts/tweets-context";
import currentUserIdContext from "../../contexts/current-user-context";

import Input from "./input-tweet-editor-form";
import TweetEditorButton from "./tweet-editor-button-actions";

function TweetEditorForm({}) {
  const [newTweetContent, setNewTweetContent] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const { tweets } = useContext(tweetsContext);
  const { currentUserId } = useContext(currentUserIdContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleNewTweet = (newTweetContent) => {
    try {
      const newTweet = {
        author: currentUserId.loggedInUserId,
        media: [],
        retweetCount: 0,
        favoriteCount: 0,
        repliesCount: 0,
        text: newTweetContent.trim(),
      };

      tweets.push(newTweet);
      //console.log("tweets nouveaux: ", tweets)
      axios
        .post(
          "https://twitter-clone-api-c2-joe-itax.onrender.com/tweets",
          newTweet
        )
        .then((res) => {
          console.log("tweet poster avec succes!!", res);
          navigate("/");
          console.log(tweets);
        });
      //console.log("Nouveau tweet ajouté au context !");
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
    // handleNewTweet(data.new_tweet);
    try {
      const newTweet = {
        author: currentUserId.loggedInUserId,
        media: [],
        retweetCount: 0,
        favoriteCount: 0,
        repliesCount: 0,
        text: data.new_tweet.trim(),
      };

      tweets.push(newTweet);
      //console.log("tweets nouveaux: ", tweets)
      axios
        .post(
          "https://twitter-clone-api-c2-joe-itax.onrender.com/tweets",
          newTweet
        )
        .then((res) => {
          console.log("tweet poster avec succes!!", res);
          navigate("/");
          console.log(tweets);
        });
      //console.log("Nouveau tweet ajouté au context !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du tweet au Context :", error);
    }
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
