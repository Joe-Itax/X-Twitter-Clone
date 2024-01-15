import { useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import globalContext from "../../../contexts/global-context";

function OtherUser() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { slug } = useParams();
  const linkProfils = useContext(globalContext);

  const linkProfil = linkProfils.find((profil) => profil.slug === slug);

  const location = useLocation();
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    if (location.pathname.startsWith(`/${slug}`)) {
      handleScrollToTop();
    }
  }, [location.pathname]);
  return (
    <div>
      <div className={`flex py-2 gap-8 items-center cursor-pointer px-2`}>
        <div className="back-icon">
          <i
            onClick={handleGoBack}
            className="ri-arrow-left-line text-base font-bold hover:bg-white/[.06] ease-in-out duration-300 p-3 rounded-[100%]"
          ></i>
        </div>
        <div className="title-profil">
          <h2 className="font-bold text-[#e6e9ea]">{linkProfil.pseudo}</h2>
          <span className="text-[13px] text-[#71767a]">1,129 posts</span>
        </div>
      </div>
      <div className="img_profils flex relative mb-20">
        <div className="couverture h-[12.5rem] w-full">
          {linkProfil.tweetImage ? (
            <img
              src={linkProfil.tweetImage}
              alt="Photo de couverture"
              className="h-full w-full"
            />
          ) : (
            <>
              <div className="bg-[#333639] h-full w-full"></div>
            </>
          )}
        </div>
        <div className="profil absolute left-4 top-full w-32 h-32 rounded-[100%] bg-white -translate-y-2/4">
          <img
            src={linkProfil.tweetAvatar}
            className="w-full h-full rounded-[100%]"
          />
        </div>
      </div>
      <h2>{linkProfil.userName}</h2>
      <h2>Pseudo: {linkProfil.pseudo}</h2>
      <h2>{linkProfil.tweetText}</h2>
      <img src={linkProfil.tweetAvatar} />
    </div>
  );
}

export default OtherUser;
