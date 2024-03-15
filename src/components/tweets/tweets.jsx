import { useContext } from "react";
import Tweet from "./tweet";
import tweetsContext from "../../contexts/tweets-context";
import userContext from "../../contexts/users-context";

function Tweets() {
  const { tweets } = useContext(tweetsContext);
  const { users } = useContext(userContext);

  const matchTweetAndAuthor = (users, tweets) => {
    for (const user of users) {
      for (const tweet of tweets) {
        if (user.id === tweet.author) {
          return user;
        }
      }
    }
    return undefined;
  };

  const userAuthorTweet = matchTweetAndAuthor(users, tweets);
  //console.log("userAuthorTweet: ", userAuthorTweet);
  //console.log("tweets: ", tweets);
  //console.log("users: ", users);
  return (
    <div className="tweets">
      {tweets
        .map((tweet) => {
          let author = users.find((user) => user.id === tweet.author);

          return (
            <Tweet
              key={tweet.id}
              tweetTitleAuthor={author?.name}
              userName={author?.handle}
              dateTime={tweet.dateTime}
              tweetText={tweet.text}
              replyValue={tweet.repliesCount}
              retweetValue={tweet.retweetCount}
              reactValue={tweet.favoriteCount}
              tweetImage={tweet.media.length > 0 && tweet.media[0]}
              tweetAvatar={author?.profilePicture}
              slug={author?.handle.slice(1, author?.handle.length)}
              tweet={tweet}
            />
          );
        })
        .reverse()}
    </div>
  );
}

export default Tweets;
