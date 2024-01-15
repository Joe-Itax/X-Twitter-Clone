import { useContext } from "react";
import { useParams } from "react-router-dom";
// import TweetData from '../../../utils/tweet-data';
import TweetData from "../utils/tweet-data";
import globalContext from "../contexts/global-context";

function Profil() {
  const { slug } = useParams();
  // const linkProfils = TweetData.getTweets();
  const linkProfils = useContext(globalContext);
  // console.log(linkProfils);

  const linkProfil = linkProfils.find((profil) => profil.slug === slug);
  // console.log(linkProfil)
  return (
    <div className="px-4 ">
      <div className={`flex px-3 py-2 gap-8 items-center`}>
        <div className="back-icon">
          <i className="ri-arrow-left-line text-base font-bold"></i>
        </div>
        <div className="title-profil">
          <h2 className="font-bold text-[#e6e9ea]">
            {linkProfil.tweetTitleAuthor}
          </h2>
          <span className="text-[13px] text-[#71767a]">1,129 posts</span>
        </div>
      </div>
      <h2>{linkProfil.slug}</h2>
      <h2>{linkProfil.id}</h2>
      <h2>{linkProfil.userName}</h2>
      <h2>{linkProfil.tweetTitleAuthor}</h2>
      <h2>{linkProfil.tweetText}</h2>
      <img src={linkProfil.tweetAvatar} />
    </div>
  );
}

export default Profil;
