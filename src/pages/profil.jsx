import { useParams } from 'react-router-dom';
// import TweetData from '../../../utils/tweet-data';
import TweetData from '../utils/tweet-data';

function Profil() {

  const { slug } = useParams();
  const linkProfils = TweetData.getTweets();
  // console.log(linkProfils);

  const linkProfil = linkProfils.find((profil) => profil.slug === slug);
  // console.log(linkProfil)
  return (
    <div>
      <div>
        <div className="back-icon">
          <i class="ri-arrow-left-line"></i>
        </div>
        <div className="title-profil">
          <h2>{linkProfil.tweetTitleAuthor}</h2>
          <span>1,129 posts</span>
        </div>
      </div>
      <h1>Profil</h1>
      <h2>{linkProfil.slug}</h2>
      <h2>{linkProfil.id}</h2>
      <h2>{linkProfil.userName}</h2>
      <h2>{linkProfil.tweetTitleAuthor}</h2>
      <h2>{linkProfil.tweetText}</h2>
      <img src={linkProfil.tweetAvatar} />
    </div>
  )
}

export default Profil;