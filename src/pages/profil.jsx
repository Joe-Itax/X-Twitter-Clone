import { useParams } from 'react-router-dom';
// import TweetData from '../../../utils/tweet-data';
import TweetData from '../utils/tweet-data';

function Profil(){

  // const { slug } = useParams();
  const linkProfils = TweetData.getTweets();

  // const linkProfil = linkProfils.find((profil) => profil.slug === slug);
  return(
    <div>
      <h1>Profil</h1>
    </div>
  )
}

export default Profil;