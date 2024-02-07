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
  tweet
}) {
  return (
    <div className="tweet flex justify-start items-start gap-5 px-4 py-6 border-b-[#2f3336] border-b border-solid">
      <div className="tweet-avatar grow-0 shrink-0 basis-[4rem] w-16 h-16">
        <Link to={`/${slug}`} className={`tweet-title-author w-full h-full`}>
          <img src={tweetAvatar} alt="tweet avatar" style={{ clipPath: "circle(50% at center)" }} className="max-w-full w-full h-full rounded-[100%]" />
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
        />
      </div>
    </div>
  );
}

export default Tweet;
