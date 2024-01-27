import { useContext } from "react";
import Tweet from "./tweet";
import globalContext from "../../contexts/global-context";

function Tweets() {
  const { tweets } = useContext(globalContext);
  return (
    <div className="tweets">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweetTitleAuthor={tweet.tweetTitleAuthor}
          userName={tweet.userName}
          dateTime={tweet.dateTime}
          tweetText={tweet.tweetText}
          replyValue={tweet.replyValue}
          retweetValue={tweet.retweetValue}
          reactValue={tweet.reactValue}
          tweetImage={tweet.tweetImage}
          tweetAvatar={tweet.tweetAvatar}
          slug={tweet.slug}
          isLiked={tweet.isLiked}
          tweet={tweet}
        />
      ))}
    </div>
  );
}

export default Tweets;
