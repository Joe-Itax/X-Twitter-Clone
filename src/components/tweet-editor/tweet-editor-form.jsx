import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import globalContext from "../../contexts/global-context"
import currentUserContext from "../../contexts/current-user-context"

import Input from "./input-tweet-editor-form";
import TweetEditorButton from "./tweet-editor-button-actions";


function TweetEditorForm({ }) {
  const [newTweetContent, setNewTweetContent] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const { tweets } = useContext(globalContext);
  const { currentUser } = useContext(currentUserContext);

  const { register, handleSubmit, formState: { errors } } = useForm();


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
        couvertureImage: null,
      };

      tweets.unshift(newTweet);
      //console.log("tweets nouveaux: ", tweets)

      //console.log("Nouveau tweet ajouté au context !");
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'ajout du tweet au Context :", error);
    }
  }

  useEffect(() => {
    if (errors.new_tweet) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [errors.new_tweet]);

  console.log("canSubmit errors?.new_tweet?.message:  ", errors?.new_tweet?.message ? true : false)
  console.log("canSubmit:  ", canSubmit)

  const addNewTweet = (e) => {
    e.preventDefault();
    handleNewTweet(newTweetContent);
    setNewTweetContent('');
  };


  const onSubmit = (data) => {
    console.log("data: ", data)
    handleNewTweet(data.new_tweet);
  }


  return (
    <form className="tweet-editor-form flex-auto" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text" name="new_tweet" id="new_tweet"
        placeholder="What's happening?"
        className="tweet-editor-input h-[60px] w-full text-[1.3rem] bg-[black] text-[white] resize-none mx-0 my-[13px] pt-2.5 pb-0 px-0 border-[none] outline-none"
        {...register("new_tweet", {
          required: "Ce champ est obligatoire",
          maxLength: {
            value: 180,
            message: "Le tweet doit contenir au maximum 180 caractères"
          },
          pattern: {
            value: /\S/,
            message: "Le contenu du tweet ne doit pas être vide ou contenir uniquement des espaces"
          }
        })}
      />

      <TweetEditorButton canSubmit={canSubmit} />
      {errors.new_tweet?.message && <p className="text-red-500 text-[0.8rem]">{errors.new_tweet.message}</p>}
    </form>
  );
}

export default TweetEditorForm;
