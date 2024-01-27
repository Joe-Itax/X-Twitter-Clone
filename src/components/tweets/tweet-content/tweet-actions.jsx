import { useState, useContext, useEffect } from "react";
import globalContext from "../../../contexts/global-context"

function TweetActions({ replyValue, retweetValue, reactValue, shareValue, tweet }) {
  const [likeTweet, setLikeTweet] = useState(reactValue);
  const [direction, setDirection] = useState("increment");
  let [isLiked, setIsLiked] = useState(tweet.isLiked);

  const { tweets, setTweets } = useContext(globalContext);

  useEffect(() => {
    setLikeTweet(tweet.reactValue);
    setIsLiked(tweet.isLiked);
  }, [tweet, setLikeTweet, setIsLiked]);


  const handleClickOnLikeButton = () => {
    const currentDirection = direction;

    let newLike;
    if (!tweet.isLiked && currentDirection === "increment") {
      newLike = likeTweet + 1;
      setIsLiked(isLiked = true);
      tweet.isLiked = true;
      setDirection("decrement");
    } else {
      newLike = likeTweet - 1;
      setIsLiked(isLiked = false);
      tweet.isLiked = false;
      setDirection("increment");
    }
    console.log(tweets)

    setLikeTweet(newLike);

    // console.log('currentDirection: ', currentDirection);
    // console.log('direction: ', direction);
    // console.log('isLikedddddddd', isLiked);
    // console.log('tweettttisLikedd', tweet.isLiked);


    setTweets(tweets.map((t) => {
      if (t.id === tweet.id) return { ...t, reactValue: newLike, isLiked: isLiked };
      return t;
    }));
  }

  return (
    <div className="tweet-actions flex justify-center items-center gap-12 text-[grey] text-base">
      <div className="tweet-action hoverReply flex items-center justify-center gap-1.5 cursor-pointer relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hoverReplyIcon w-5 h-5 transition-all duration-[0.3s] ease-[ease-in-out] text-xl text-[#71767b] rounded-[50%]"
        >
          <path
            className="fill-[#71767b] transition-all duration-[0.3s] ease-[ease-in-out]"
            d="M14.0459 2.242L9.89795 2.232H9.89595C5.52195 2.232 2.09595 5.659 2.09595 10.034C2.09595 14.132 5.28195 17.24 9.56095 17.404V21.232C9.56095 21.34 9.60495 21.518 9.68095 21.635C9.82295 21.86 10.0649 21.982 10.3129 21.982C10.4509 21.982 10.5899 21.944 10.7149 21.864C10.9789 21.696 17.1879 17.724 18.8029 16.358C20.7049 14.748 21.8429 12.388 21.8459 10.046V10.029C21.8399 5.662 18.4159 2.242 14.0459 2.241V2.242ZM17.8329 15.214C16.6989 16.174 12.9709 18.619 11.0609 19.857V16.67C11.0609 16.256 10.7259 15.92 10.3109 15.92H9.91495C6.25495 15.92 3.59695 13.444 3.59695 10.034C3.59695 6.5 6.36495 3.732 9.89695 3.732L14.0439 3.742H14.0459C17.5779 3.742 20.3459 6.508 20.3479 10.038C20.3449 11.948 19.4059 13.882 17.8339 15.214H17.8329Z"
            fill="#D9D9D9"
          />
        </svg>
        <div className="svg-border absolute top-[-5px] left-[-5px] w-[30px] h-[30px] transition-all duration-[0.3s] ease-[ease-in-out] rounded-[50%]"></div>
        <span className="hoverReplyText transition-all duration-[0.3s] ease-[ease-in-out]">
          {replyValue}
        </span>
      </div>
      <div className="tweet-action hoverRetweet flex items-center justify-center gap-1.5 cursor-pointer relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hoverRetweetIcon w-5 h-5 transition-all duration-[0.3s] ease-[ease-in-out] text-xl text-[#71767b] rounded-[50%]"
        >
          <path
            className="fill-[#71767b] transition-all duration-[0.3s] ease-[ease-in-out]"
            d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.65C20.49 5.582 18.807 3.9 16.74 3.9H10.89C10.476 3.9 10.14 4.236 10.14 4.65C10.14 5.064 10.476 5.4 10.89 5.4H16.74C17.98 5.4 18.99 6.41 18.99 7.65V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67ZM13.11 18.95H7.25997C6.01997 18.95 5.00997 17.94 5.00997 16.7V6.46L7.22997 8.68C7.37797 8.827 7.56997 8.9 7.76197 8.9C7.95397 8.9 8.14597 8.827 8.29197 8.68C8.58497 8.387 8.58497 7.912 8.29197 7.62L4.79197 4.12C4.49897 3.826 4.02397 3.826 3.73197 4.12L0.231975 7.62C-0.0620254 7.912 -0.0620254 8.387 0.231975 8.68C0.525975 8.973 0.998975 8.973 1.29197 8.68L3.51197 6.46V16.7C3.51197 18.768 5.19497 20.45 7.26197 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95H13.11Z"
            fill="#D9D9D9"
          />
        </svg>
        <div className="svg-border absolute top-[-5px] left-[-5px] w-[30px] h-[30px] transition-all duration-[0.3s] ease-[ease-in-out] rounded-[50%]"></div>
        <span className="hoverRetweetText transition-all duration-[0.3s] ease-[ease-in-out]">
          {retweetValue}
        </span>
      </div>
      <div
        className={`tweet-action hoverReact flex justify-center gap-1.5 cursor-pointer relative${tweet.isLiked ? " isLikedBox" : ""
          }`}
        onClick={handleClickOnLikeButton}
      >
        {tweet.isLiked ? (
          <i
            className={`ri-heart-fill w-5 h-5 transition-all duration-[0.3s] ease-[ease-in-out] text-xl rounded-[50%] text-[rgb(248,73,137)]`}
          ></i>
        ) : (
          <i className="ri-heart-line w-5 h-5 transition-all duration-[0.3s] ease-[ease-in-out] text-xl text-[#71767b] rounded-[50%]"></i>
        )}
        <div className="svg-border absolute top-[-5px] left-[-5px] w-[30px] h-[30px] transition-all duration-[0.3s] ease-[ease-in-out] rounded-[50%]"></div>
        <span
          className={`hoverReactText transition-all duration-[0.3s] ease-[ease-in-out]${tweet.isLiked ? " isLiked" : ""
            }`}
        >
          {likeTweet}
        </span>
      </div>
      <div className="tweet-action hoverShare flex items-center justify-center gap-1.5 cursor-pointer relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hoverShareIcon w-5 h-5 transition-all duration-[0.3s] ease-[ease-in-out] text-xl text-[#71767b] rounded-[50%]"
        >
          <path
            className="fill-[#71767b] transition-all duration-[0.3s] ease-[ease-in-out]"
            d="M17.53 7.47L12.53 2.47C12.237 2.177 11.762 2.177 11.47 2.47L6.47001 7.47C6.17601 7.763 6.17601 8.238 6.47001 8.53C6.76401 8.822 7.23701 8.824 7.53001 8.53L11.25 4.81V15C11.25 15.414 11.586 15.75 12 15.75C12.414 15.75 12.75 15.414 12.75 15V4.81L16.47 8.53C16.616 8.677 16.808 8.75 17 8.75C17.192 8.75 17.384 8.678 17.53 8.53C17.823 8.237 17.823 7.763 17.53 7.47Z"
            fill="#D9D9D9"
          />
          <path
            className="fill-[#71767b] transition-all duration-[0.3s] ease-[ease-in-out]"
            d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944Z"
            fill="#D9D9D9"
          />
        </svg>
        <div className="svg-border absolute top-[-5px] left-[-5px] w-[30px] h-[30px] transition-all duration-[0.3s] ease-[ease-in-out] rounded-[50%]"></div>
        <span
          className="hoverShareText transition-all duration-[0.3s] ease-[ease-in-out]"
          style={{ display: "none" }}
        >
          {shareValue}
        </span>
      </div>
    </div>
  );
}

export default TweetActions;
