// import TweetCreator from './tweet-creator';
import Tweet from './tweet';
import TweetData from "../../utils/tweet-data"


function Tweets() {
  const tweetCreator = TweetData.getTweets();
  return (
    <div className="tweets">
      {tweetCreator.map(tweet => (
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
        />
      ))}
    </div>
  );
}

export default Tweets;
