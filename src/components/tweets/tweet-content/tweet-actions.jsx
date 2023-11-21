import replyIcon from '../../../assets/icons/Reply.svg';
import retweetIcon from '../../../assets/icons/Retweet.svg';
import reactIcon from '../../../assets/icons/React.svg';
import shareIcon from '../../../assets/icons/Share.svg';

function TweetActions({ replyValue, retweetValue, reactValue, shareValue }) {
  return (
    <div className="tweet-actions">
      <div className="tweet-action">
        <img src={replyIcon} alt="" />
        <span>{replyValue}</span>
      </div>
      <div className="tweet-action">
        <img src={retweetIcon} alt="" />
        <span>{retweetValue}</span>
      </div>
      <div className="tweet-action">
        <img src={reactIcon} alt="" />
        <span>{reactValue}</span>
      </div>
      <div className="tweet-action">
        <img src={shareIcon} alt="" />
        <span>{shareValue}</span>
      </div>
    </div>
  );
}

export default TweetActions;
