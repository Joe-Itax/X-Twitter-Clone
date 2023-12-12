import { Link } from 'react-router-dom';
import TweetActions from './tweet-content/tweet-actions';
import TweetBody from './tweet-content/tweet-body';
function Tweet({
  tweetTitleAuthor,
  tweetTitleDetailsSpan,
  tweetText,
  replyValue,
  retweetValue,
  reactValue,
  shareValue,
  tweetImage,
  tweetAvatar,
}) {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <Link to={`/home`} className={`tweet-title-author`}>
          <img src={tweetAvatar} alt="tweet avatar" />
        </Link>
      </div>
      <div className="tweet-content">
        <TweetBody
          tweetTitleAuthor={tweetTitleAuthor}
          tweetTitleDetailsSpan={tweetTitleDetailsSpan}
          tweetText={tweetText}
          tweetImage={tweetImage}
        />
        <TweetActions
          replyValue={replyValue}
          retweetValue={retweetValue}
          reactValue={reactValue}
          shareValue={shareValue}
        />
      </div>
    </div>
  );
}

export default Tweet;
