function TweetActions({ replyValue, retweetValue, reactValue, shareValue }) {
  return <div className="tweet-actions">
    <div className="tweet-action">
      <img src="src\assets\Icons\Reply.svg" alt="" />
      <span>{replyValue}</span>
    </div>
    <div className="tweet-action">
      <img src="src\assets\Icons\Retweet.svg" alt="" />
      <span>{retweetValue}</span>
    </div>
    <div className="tweet-action">
      <img src="src\assets\Icons\React.svg" alt="" />
      <span>{reactValue}</span>
    </div>
    <div className="tweet-action">
      <img src="src\assets\Icons\Share.svg" alt="" />
      <span>{shareValue}</span>
    </div>
  </div>
}