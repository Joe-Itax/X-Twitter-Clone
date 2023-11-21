import Tweet from './tweet';
import imageTweet1 from '../../assets/images/tweet-image.png';
import avatarTweet1 from '../../assets/images/tweet-profile-photo.png';
import avatarTweet2 from '../../assets/images/tweet-profile-photo-2.png';
import avatarTweet3 from '../../assets/images/logoX.png';

function Tweets() {
  const tweetTextParagraphe1 = (
    <p>
      President Joe Biden touted a new agreement reached with the European Union
      to ease Trump-era tariffs on aluminum and steel as a "major breakthrough"
      that would serve to both strengthen the US steel industry and combat the
      global climate crisis.
    </p>
  );
  const tweetTextParagraphe2 = (
    <p>
      Gardening boomed during the pandemic. Six Black writers share how it has
      helped them re-establish, and reimagine, a connection to cultivation and
      the land
    </p>
  );
  const tweetTextParagraphe3 = <p>BIG NEWS lol jk still Twitter</p>;
  const tweetTextParagraphe4 = <p>Hello litteraly everyone</p>;
  const tweetTextParagraphe5 = <p>Hello litteraly everyone</p>;
  return (
    <div className="tweets">
      {/* <div className="tweet">
        <div className="tweet-avatar">
          <img
            src="src\assets\images\tweet-profile-photo.png"
            alt="tweet avatar"
          />
        </div>
        <div className="tweet-content">
          <div className="tweet-body">
            <div className="tweet-title">
              <h3 className="tweet-title-author">CNN</h3>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 12.5C22.5 10.92 21.625 9.55 20.352 8.9C20.506 8.465 20.59 7.995 20.59 7.5C20.59 5.29 18.88 3.502 16.772 3.502C16.302 3.502 15.852 3.586 15.436 3.752C14.818 2.415 13.51 1.5 12 1.5C10.49 1.5 9.18402 2.417 8.56302 3.75C8.14802 3.585 7.69702 3.5 7.22702 3.5C5.11702 3.5 3.40902 5.29 3.40902 7.5C3.40902 7.994 3.49202 8.464 3.64602 8.9C2.37402 9.55 1.49902 10.918 1.49902 12.5C1.49902 13.995 2.28102 15.298 3.44102 15.986C3.42102 16.156 3.40902 16.326 3.40902 16.5C3.40902 18.71 5.11702 20.5 7.22702 20.5C7.69702 20.5 8.14702 20.414 8.56202 20.25C9.18202 21.584 10.488 22.5 11.999 22.5C13.511 22.5 14.817 21.584 15.436 20.25C15.851 20.413 16.301 20.498 16.772 20.498C18.882 20.498 20.59 18.708 20.59 16.498C20.59 16.324 20.578 16.154 20.557 15.985C21.715 15.298 22.5 13.995 22.5 12.501V12.5ZM15.884 9.166L11.55 15.666C11.405 15.883 11.168 16 10.925 16C10.782 16 10.637 15.96 10.509 15.874L10.394 15.78L7.97902 13.365C7.68602 13.072 7.68602 12.597 7.97902 12.305C8.27202 12.013 8.74702 12.011 9.03902 12.305L10.809 14.072L14.634 8.332C14.864 7.987 15.33 7.896 15.674 8.125C16.02 8.355 16.114 8.821 15.884 9.165V9.166Z"
                  fill="#D9D9D9"
                />
              </svg>
              <div className="tweet-title-details">
                <span>@CNN . 7m</span>
              </div>
            </div>
            <div className="tweet-text">
              <p>
                President Joe Biden touted a new agreement reached with the
                European Union to ease Trump-era tariffs on aluminum and steel
                as a "major breakthrough" that would serve to both strengthen
                the US steel industry and combat the global climate crisis.
              </p>
            </div>
          </div>
          <div className="tweet-actions">
            <div className="tweet-action">
              <img src="src\assets\Icons\Reply.svg" alt="" />
              <span>19</span>
            </div>
            <div className="tweet-action">
              <img src="src\assets\Icons\Retweet.svg" alt="" />
              <span>19</span>
            </div>
            <div className="tweet-action">
              <img src="src\assets\Icons\React.svg" alt="" />
              <span>19</span>
            </div>
            <div className="tweet-action">
              <img src="src\assets\Icons\Share.svg" alt="" />
              <span>19</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet">
        <div className="tweet-avatar">
          <img
            // src="src\assets\images\tweet-profile-photo-2.png"
            src={blabla}
            alt="tweet avatar"
          />
        </div>
        <div className="tweet-content">
          <div className="tweet-body">
            <div className="tweet-title">
              <h3 className="tweet-title-author">The New York Times</h3>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 12.5C22.5 10.92 21.625 9.55 20.352 8.9C20.506 8.465 20.59 7.995 20.59 7.5C20.59 5.29 18.88 3.502 16.772 3.502C16.302 3.502 15.852 3.586 15.436 3.752C14.818 2.415 13.51 1.5 12 1.5C10.49 1.5 9.18402 2.417 8.56302 3.75C8.14802 3.585 7.69702 3.5 7.22702 3.5C5.11702 3.5 3.40902 5.29 3.40902 7.5C3.40902 7.994 3.49202 8.464 3.64602 8.9C2.37402 9.55 1.49902 10.918 1.49902 12.5C1.49902 13.995 2.28102 15.298 3.44102 15.986C3.42102 16.156 3.40902 16.326 3.40902 16.5C3.40902 18.71 5.11702 20.5 7.22702 20.5C7.69702 20.5 8.14702 20.414 8.56202 20.25C9.18202 21.584 10.488 22.5 11.999 22.5C13.511 22.5 14.817 21.584 15.436 20.25C15.851 20.413 16.301 20.498 16.772 20.498C18.882 20.498 20.59 18.708 20.59 16.498C20.59 16.324 20.578 16.154 20.557 15.985C21.715 15.298 22.5 13.995 22.5 12.501V12.5ZM15.884 9.166L11.55 15.666C11.405 15.883 11.168 16 10.925 16C10.782 16 10.637 15.96 10.509 15.874L10.394 15.78L7.97902 13.365C7.68602 13.072 7.68602 12.597 7.97902 12.305C8.27202 12.013 8.74702 12.011 9.03902 12.305L10.809 14.072L14.634 8.332C14.864 7.987 15.33 7.896 15.674 8.125C16.02 8.355 16.114 8.821 15.884 9.165V9.166Z"
                  fill="#D9D9D9"
                />
              </svg>
              <div className="tweet-title-details">
                <span>@nytimes . 2h</span>
              </div>
            </div>
            <div className="tweet-text">
              <p>
                President Joe Biden touted a new agreement reached with the
                European Union to ease Trump-era tariffs on aluminum and steel
                as a "major breakthrough" that would serve to both strengthen
                the US steel industry and combat the global climate crisis.
              </p>
            </div>
            <div className="tweet-image">
              <img src="src\assets\images\tweet-image.png" alt="Tweet image" />
            </div>
          </div>
          <div className="tweet-actions">
            <div className="tweet-action">
              <img src="src\assets\Icons\Reply.svg" alt="" />
              <span>19</span>
            </div>
            <div className="tweet-action">
              <img src="src\assets\Icons\Retweet.svg" alt="" />
              <span>19</span>
            </div>
            <div className="tweet-action">
              <img src="src\assets\Icons\React.svg" alt="" />
              <span>19</span>
            </div>
            <div className="tweet-action">
              <img src="src\assets\Icons\Share.svg" alt="" />
              <span>19</span>
            </div>
          </div>
        </div>
      </div> */}
      <Tweet
        tweetTitleAuthor="CNN"
        tweetTitleDetailsSpan="@CNN . 7m"
        tweetTextParagraphe={tweetTextParagraphe1}
        replyValue="57"
        retweetValue="144"
        reactValue="184"
        tweetAvatar={avatarTweet1}
      />
      <Tweet
        tweetTitleAuthor="The New York Times"
        tweetTitleDetailsSpan="@nytimes . 2h"
        tweetTextParagraphe={tweetTextParagraphe2}
        replyValue="19"
        retweetValue="48"
        reactValue="482"
        tweetImage={imageTweet1}
        tweetAvatar={avatarTweet2}
      />
      <Tweet
        tweetTitleAuthor="Twitter"
        tweetTitleDetailsSpan="@x . Oct 29"
        tweetTextParagraphe={tweetTextParagraphe3}
        replyValue="6.8K"
        retweetValue="36.6K"
        reactValue="267.1K"
        tweetAvatar={avatarTweet3}
      />
      <Tweet
        tweetTitleAuthor="Twitter"
        tweetTitleDetailsSpan="@x . Oct 4"
        tweetTextParagraphe={tweetTextParagraphe4}
        replyValue="118.7K"
        retweetValue="785.4K"
        reactValue="3.3M"
        tweetAvatar={avatarTweet3}
      />
      <Tweet
        tweetTitleAuthor="Twitter"
        tweetTitleDetailsSpan="@x . Oct 4"
        tweetTextParagraphe={tweetTextParagraphe5}
        replyValue="19"
        retweetValue="48"
        reactValue="482"
        tweetAvatar={avatarTweet3}
      />
    </div>
  );
}

export default Tweets;
