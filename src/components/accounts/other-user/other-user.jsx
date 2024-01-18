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
      <div
        className={`flex py-2 gap-8 items-center cursor-pointer px-2 sticky z-[999] bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] top-0`}
      >
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
            <div className="icon_more text-[#eff3f4] ">
              <i className="ri-more-line rounded-[100%] border p-1 border-[#eff3f4] text-[1.5rem] hover:bg-white/10 transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer"></i>
            </div>
            <FollowBtn />
          </div>
        </div>
      </div>
      <div className="info-profil px-4">
        <div className="identite mb-3 mt-1">
          <div>
            <span className="text-xl font-extrabold text-[#e7e9ea]">
              {linkProfil.pseudo}
            </span>
          </div>
          <div>
            <span className="text-base text-[#71767b]">
              {linkProfil.userName}
            </span>
          </div>
        </div>
        <div className="description-du-compte mb-3">
          <span className="text-base font-normal text-[#e7e9ea]">
            •Égérie de ECOBANK •Conseillère en image👩🏽‍💻( la mise en valeur de
            votre Personal Branding) •Féministe libérale •Juriste 👩🏽‍⚖️( droit
            humanitaire)
          </span>
        </div>
        <div className="joined-on mb-3 flex">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="inline-block mr-1"
            width="24"
            height="24"
            fill="#71767b"
          >
            <g>
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
            </g>
          </svg>
          <span className="text-base text-[#71767b]">Joined December 2020</span>
        </div>
        <div className="follow mb-3 flex gap-5">
          <div className="following">
            <span className="font-bold text-sm text-[#e7e9ea] mr-1">298</span>
            <span className="text-[#71767b] text-sm">Following</span>
          </div>
          <div className="followers">
            <span className="font-bold text-sm text-[#e7e9ea] mr-1">234</span>
            <span className="text-[#71767b] text-sm">Followers</span>
          </div>
        </div>
        <div className="followers">
          <span className="text-[#71767b] text-sm">
            Not followed by anyone following
          </span>
        </div>
      </div>
      {/* <h2>{linkProfil.tweetText}</h2>
      <img src={linkProfil.tweetAvatar} /> */}
    </div>
  );
}

export default OtherUser;
