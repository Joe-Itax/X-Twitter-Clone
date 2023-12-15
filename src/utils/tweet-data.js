import imageTweet1 from '../assets/images/tweet-image.png';
import avatarTweet1 from '../assets/images/tweet-profile-photo.png';
import avatarTweet2 from '../assets/images/tweet-profile-photo-2.png';
import avatarTweet3 from '../assets/images/logoX.png';

class TweetData {
  static getTweets() {
    const tweets = [
      {
        id: 1,
        slug: "CNN",
        tweetTitleAuthor: "CNN",
        tweetTitleDetailsSpan: "@CNN . 7m",
        userName: '@CNN',
        dateTime: '7m',
        tweetText: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        replyValue: "57",
        retweetValue: "144",
        reactValue: 184,
        tweetImage: null,
        tweetAvatar: avatarTweet1
      },
      {
        id: 2,
        slug: "nytimes",
        tweetTitleAuthor: "The New York Times",
        tweetTitleDetailsSpan: "@nytimes . 2h",
        userName: '@nytimes',
        dateTime: '2h',
        tweetText: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        replyValue: "19",
        retweetValue: "48",
        reactValue: 482,
        tweetImage: imageTweet1,
        tweetAvatar: avatarTweet2
      },
      {
        id: 3,
        slug: "X",
        tweetTitleAuthor: "Twitter",
        tweetTitleDetailsSpan: "@X . Oct 29",
        userName: '@X',
        dateTime: 'Oct 29',
        tweetText: "BIG NEWS lol jk still Twitter",
        replyValue: "6.8K",
        retweetValue: "36.6K",
        reactValue: 267,
        tweetImage: null,
        tweetAvatar: avatarTweet3
      },
      {
        id: 4,
        slug: "X",
        tweetTitleAuthor: "Twitter",
        tweetTitleDetailsSpan: "@X . Oct 4",
        userName: '@X',
          dateTime: 'Oct 4',
        tweetText: "Hello litteraly everyone",
        replyValue: "118.7K",
        retweetValue: "785.4K",
        reactValue: 375,
        tweetImage: null,
        tweetAvatar: avatarTweet3
      },
      {
        id: 5,
        slug: "X",
        tweetTitleAuthor: "Twitter",
        tweetTitleDetailsSpan: "@X . Oct 4",
        userName: '@X',
          dateTime: 'Oct 4',
        tweetText: "Hello litteraly everyone",
        replyValue: "118.7K",
        retweetValue: "785.4K",
        reactValue: 3105,
        tweetImage: null,
        tweetAvatar: avatarTweet3
      }
    ];
    return tweets;
  }
}

export default TweetData;
