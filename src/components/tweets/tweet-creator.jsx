import Tweet from './tweet';
import imageTweet1 from '../../assets/images/tweet-image.png';
import avatarTweet1 from '../../assets/images/tweet-profile-photo.png';
import avatarTweet2 from '../../assets/images/tweet-profile-photo-2.png';
import avatarTweet3 from '../../assets/images/logoX.png';

function TweetCreator() {
  const tweetsObject = [
    {
      id: 1,
      tweetTitleAuthor: "CNN",
      tweetTitleDetailsSpan: "@CNN . 7m",
      tweetText: (<p>President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.</p>),
      replyValue: "57",
      retweetValue: "144",
      reactValue: 184,
      tweetImage: null,
      tweetAvatar: avatarTweet1
    },
    {
      id: 2,
      tweetTitleAuthor: "The New York Times",
      tweetTitleDetailsSpan: "@nytimes . 2h",
      tweetText: ((<p>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>)),
      replyValue: "19",
      retweetValue: "48",
      reactValue: 482,
      tweetImage: imageTweet1,
      tweetAvatar: avatarTweet2
    },
    {
      id: 3,
      tweetTitleAuthor: "Twitter",
      tweetTitleDetailsSpan: "@x . Oct 29",
      tweetText: ((<p>BIG NEWS lol jk still Twitter</p>)),
      replyValue: "6.8K",
      retweetValue: "36.6K",
      reactValue: 267,
      tweetImage: null,
      tweetAvatar: avatarTweet3
    },
    {
      id: 4,
      tweetTitleAuthor: "Twitter",
      tweetTitleDetailsSpan: "@x . Oct 4",
      tweetText: ((<p>Hello litteraly everyone</p>)),
      replyValue: "118.7K",
      retweetValue: "785.4K",
      reactValue: 375,
      tweetImage: null,
      tweetAvatar: avatarTweet3
    },
    {
      id: 5,
      tweetTitleAuthor: "Twitter",
      tweetTitleDetailsSpan: "@x . Oct 4",
      tweetText: ((<p>Hello litteraly everyone</p>)),
      replyValue: "118.7K",
      retweetValue: "785.4K",
      reactValue: 3105,
      tweetImage: null,
      tweetAvatar: avatarTweet3
    }
  ];

  return (
    <div className="tweets">
      {tweetsObject.map(tweet => (
        <Tweet
          key={tweet.id}
          tweetTitleAuthor={tweet.tweetTitleAuthor}
          tweetTitleDetailsSpan={tweet.tweetTitleDetailsSpan}
          tweetText={tweet.tweetText}
          replyValue={tweet.replyValue}
          retweetValue={tweet.retweetValue}
          reactValue={tweet.reactValue}
          tweetImage={tweet.tweetImage}
          tweetAvatar={tweet.tweetAvatar}
        />
      ))}
    </div>
  );
}

export default TweetCreator;