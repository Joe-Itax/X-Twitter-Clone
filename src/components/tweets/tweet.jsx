import { Link } from 'react-router-dom';
import TweetActions from './tweet-content/tweet-actions';
import TweetBody from './tweet-content/tweet-body';
function Tweet({
  tweetTitleAuthor,
  userName,
  dateTime,
  tweetText,
  replyValue,
  retweetValue,
  reactValue,
  shareValue,
  tweetImage,
  tweetAvatar,
  slug
}) {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <Link to={`/${slug}`} className={`tweet-title-author`}>
          <img src={tweetAvatar} alt="tweet avatar" />
        </Link>
      </div>
      <div className="tweet-content">
        <TweetBody
          tweetTitleAuthor={tweetTitleAuthor}
          tweetText={tweetText}
          tweetImage={tweetImage}
          userName={userName}
          dateTime={dateTime}
          slug={slug}
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
