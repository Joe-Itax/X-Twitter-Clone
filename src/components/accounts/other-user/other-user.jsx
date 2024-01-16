import { useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import globalContext from "../../../contexts/global-context";
import FollowBtn from "../../Buttons/follow-btn";

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
      <div className="img_profils flex flex-col relative mb-20">
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
        <div className="container-profil-photo flex justify-end px-4">
          <div className="profil absolute left-4 top-full w-32 h-32 rounded-[100%] bg-white -translate-y-2/4">
            <img
              src={linkProfil.tweetAvatar}
              className="w-full h-full rounded-[100%]"
            />
          </div>
          <div className="flex absolute top-[100%] mt-4 items-center gap-2">
            <div class="icon_more text-[#eff3f4] ">
              <i class="ri-more-line rounded-[100%] border p-1 border-[#eff3f4] text-[1.5rem] hover:bg-white/10 transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer"></i>
            </div>
            <FollowBtn />
          </div>
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
