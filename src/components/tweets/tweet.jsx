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
  slug,
  isLiked,
  tweet
}) {
  return (
    <div className="tweet flex justify-start items-start gap-5 px-4 py-6 border-b-[#2f3336] border-b border-solid">
      <div className="tweet-avatar flex-[0_0_70px]">
        <Link to={`/${slug}`} className={`tweet-title-author`}>
          <img src={tweetAvatar} alt="tweet avatar" className="max-w-full max-h-[100px] rounded-[100%]" />
        </Link>
      </div>
      <div className="tweet-content flex flex-col items-start justify-start gap-[30px] w-full">
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
          tweet={tweet}
          isLiked={isLiked}
        />
      </div>
    </div>
  );
}

export default Tweet;
