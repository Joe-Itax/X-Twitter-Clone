import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation, NavLink } from "react-router-dom";

import axios from "axios";

import Tweet from "../../tweets/tweet";
import currentUserIdContext from "../../../contexts/current-user-context";
import tweetsContext from "../../../contexts/tweets-context";
import userContext from "../../../contexts/users-context";
import FollowBtn from "../../Buttons/follow-btn";

import { formatTimestamp } from "../../../utils/utils-functions";

function OtherUser() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { slug } = useParams();
  // const { tweets } = useContext(tweetsContext);
  const [tweets, setTweets] = useState([]);
  const { users } = useContext(userContext);
  let { currentUserId } = useContext(currentUserIdContext);
  const findUserIdByHandle = (users, slug) => {
    let userId = null;
    users.forEach((user) => {
      if (user.handle === `@${slug}`) {
        userId = user.id;
      }
    });
    return userId;
  };
  const userId = findUserIdByHandle(users, slug);

  // const tweetOfOneUser = tweets.length > 0 && tweets.filter((tweet) => tweet.author === userId);
  const tweetOfOneUser = tweets.filter((tweet) => tweet.author === userId);
  // console.log("tweetOfOneUser: ", tweetOfOneUser);
  // console.log("https://twitter-clone-api-c2-joe-itax.onrender.com/: ");
  // console.log("users: ", users);
  // console.log("tweetOfOneUser: ", tweetOfOneUser);
  // console.log("slug: ", slug);
  // console.log("users: ", users);
  // console.log("slug: ", slug);
  // console.log("slug: ", slug);
  const linkProfils = tweets;

  // const linkProfil = linkProfils.find((profil) => profil.slug === slug);

  const linkProfil = users.find((user) => user.handle === `@${slug}`);

  // console.log("linkProfil: ", linkProfil);

  const tweetsPerso = linkProfils.filter((tweet) => tweet.slug === slug);
  const location = useLocation();
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    if (location.pathname.startsWith(`/${slug}`)) {
      handleScrollToTop();
    }

    try {
      axios
        .get(
          `https://twitter-clone-api-c2-joe-itax.onrender.com/users/${slug}/tweets`
        )
        .then((res) => setTweets(res.data));
    } catch (err) {
      console.error(`Erreur lors de la recuperation des données ${err}`);
    }
  }, [location.pathname]);
  return (
    <div className="relative h-full">
      {!linkProfil ? (
        <div className="loader absolute translate-x-[-5O%] -translate-y-[-50%] left-2/4 top-[50%]"></div>
      ) : (
        <>
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
              <h2 className="font-bold text-[#e6e9ea]">{linkProfil?.handle}</h2>
              <span className="text-[13px] text-[#71767a]">
                {tweets.length} post{tweets.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className="img_profils flex flex-col relative mb-20">
            <div className="couverture h-[12.5rem] w-full">
              {linkProfil?.profileBackground ? (
                <img
                  src={linkProfil.profileBackground}
                  alt="Photo de couverture"
                  className="h-full w-full object-cover"
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
                  src={linkProfil?.profilePicture}
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
          <div className="info-profil px-4 mb-12">
            <div className="identite mb-3 mt-1">
              <div>
                <span className="text-xl font-extrabold text-[#e7e9ea]">
                  {linkProfil.handle}
                </span>
              </div>
              <div>
                <span className="text-base text-[#71767b]">
                  {linkProfil.name}
                </span>
              </div>
            </div>
            <div className="description-du-compte mb-3">
              <span className="text-base font-normal text-[#e7e9ea]">
                {linkProfil.bio}
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
              <span className="text-base text-[#71767b]">
                Joined {formatTimestamp(linkProfil.createdAt)}
              </span>
            </div>
            <div className="follow mb-3 flex gap-5">
              <div className="following">
                <span className="font-bold text-sm text-[#e7e9ea] mr-1">
                  {linkProfil.followingCount}
                </span>
                <span className="text-[#71767b] text-sm">Following</span>
              </div>
              <div className="followers">
                <span className="font-bold text-sm text-[#e7e9ea] mr-1">
                  {linkProfil.followersCount}
                </span>
                <span className="text-[#71767b] text-sm">Followers</span>
              </div>
            </div>
            <div className="followers">
              <span className="text-[#71767b] text-sm">
                Location: {linkProfil.location}
              </span>
            </div>
          </div>
          <nav className="flex items-center justify-center border-b border-solid border-[#2f3336]">
            <div className="w-full posts">
              <NavLink
                to={`/${slug}`}
                className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
              >
                <div
                  className={`${
                    location.pathname === `/${slug}`
                      ? "relative font-bold h-full text-[#E7E9EA]"
                      : "text-[#71767B]"
                  } flex justify-center items-center text-base`}
                >
                  <span>Posts</span>
                  <div
                    className={`${
                      location.pathname === `/${slug}`
                        ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                        : ""
                    } `}
                  ></div>
                </div>
              </NavLink>
            </div>
            <div className="w-full Replies">
              <NavLink
                to={`/${slug}/with_replies`}
                className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
              >
                <div
                  className={`${
                    location.pathname === `/${slug}/with_replies`
                      ? "relative font-bold h-full text-[#E7E9EA]"
                      : "text-[#71767B]"
                  } flex justify-center items-center text-base`}
                >
                  <span>Replies</span>
                  <div
                    className={`${
                      location.pathname === `/${slug}/with_replies`
                        ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                        : ""
                    } `}
                  ></div>
                </div>
              </NavLink>
            </div>
            <div className="w-full Media">
              <NavLink
                to={`/${slug}/media`}
                className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
              >
                <div
                  className={`${
                    location.pathname === `/${slug}/media`
                      ? "relative font-bold h-full text-[#E7E9EA]"
                      : "text-[#71767B]"
                  } flex justify-center items-center text-base`}
                >
                  <span>Media</span>
                  <div
                    className={`${
                      location.pathname === `/${slug}/media`
                        ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                        : ""
                    } `}
                  ></div>
                </div>
              </NavLink>
            </div>
            <div className="w-full Media">
              <NavLink
                to={`/${slug}/likes`}
                className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
              >
                <div
                  className={`${
                    location.pathname === `/${slug}/likes`
                      ? "relative font-bold h-full text-[#E7E9EA]"
                      : "text-[#71767B]"
                  } flex justify-center items-center text-base`}
                >
                  <span>Likes</span>
                  <div
                    className={`${
                      location.pathname === `/${slug}/likes`
                        ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                        : ""
                    } `}
                  ></div>
                </div>
              </NavLink>
            </div>
          </nav>
          <div className="tweets">
            {tweetOfOneUser.map((tweet) => {
              let author = users.find((user) => user.id === tweet.author);
              // console.log(author:);
              return (
                <Tweet
                  key={tweet.id}
                  tweetTitleAuthor={author.name}
                  userName={author.handle}
                  dateTime={formatTimestamp(tweet.createdAt)}
                  tweetText={tweet.text}
                  replyValue={tweet.repliesCount}
                  retweetValue={tweet.retweetCount}
                  reactValue={tweet.favoriteCount}
                  tweetImage={tweet.media.length >= 0 && tweet.media[0]}
                  tweetAvatar={author.profilePicture}
                  slug={slug}
                  tweet={tweet}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
  /*if (slug !== currentUserId.slug) {
    return (
      <div className="relative h-full">
        {!linkProfil ? (
          <div className="loader absolute translate-x-[-5O%] -translate-y-[-50%] left-2/4 top-[50%]"></div>
        ) : (
          <>
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
                <h2 className="font-bold text-[#e6e9ea]">
                  {linkProfil?.handle}
                </h2>
                <span className="text-[13px] text-[#71767a]">
                  {tweets.length} post{tweets.length > 1 ? "s" : ""}
                </span>
              </div>
            </div>
            <div className="img_profils flex flex-col relative mb-20">
              <div className="couverture h-[12.5rem] w-full">
                {linkProfil?.profileBackground ? (
                  <img
                    src={linkProfil.profileBackground}
                    alt="Photo de couverture"
                    className="h-full w-full object-cover"
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
                    src={linkProfil?.profilePicture}
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
            <div className="info-profil px-4 mb-12">
              <div className="identite mb-3 mt-1">
                <div>
                  <span className="text-xl font-extrabold text-[#e7e9ea]">
                    {linkProfil.handle}
                  </span>
                </div>
                <div>
                  <span className="text-base text-[#71767b]">
                    {linkProfil.name}
                  </span>
                </div>
              </div>
              <div className="description-du-compte mb-3">
                <span className="text-base font-normal text-[#e7e9ea]">
                  {linkProfil.bio}
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
                <span className="text-base text-[#71767b]">
                  Joined {formatTimestamp(linkProfil.createdAt)}
                </span>
              </div>
              <div className="follow mb-3 flex gap-5">
                <div className="following">
                  <span className="font-bold text-sm text-[#e7e9ea] mr-1">
                    {linkProfil.followingCount}
                  </span>
                  <span className="text-[#71767b] text-sm">Following</span>
                </div>
                <div className="followers">
                  <span className="font-bold text-sm text-[#e7e9ea] mr-1">
                    {linkProfil.followersCount}
                  </span>
                  <span className="text-[#71767b] text-sm">Followers</span>
                </div>
              </div>
              <div className="followers">
                <span className="text-[#71767b] text-sm">
                  Location: {linkProfil.location}
                </span>
              </div>
            </div>
            <nav className="flex items-center justify-center border-b border-solid border-[#2f3336]">
              <div className="w-full posts">
                <NavLink
                  to={`/${slug}`}
                  className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
                >
                  <div
                    className={`${
                      location.pathname === `/${slug}`
                        ? "relative font-bold h-full text-[#E7E9EA]"
                        : "text-[#71767B]"
                    } flex justify-center items-center text-base`}
                  >
                    <span>Posts</span>
                    <div
                      className={`${
                        location.pathname === `/${slug}`
                          ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                          : ""
                      } `}
                    ></div>
                  </div>
                </NavLink>
              </div>
              <div className="w-full Replies">
                <NavLink
                  to={`/${slug}/with_replies`}
                  className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
                >
                  <div
                    className={`${
                      location.pathname === `/${slug}/with_replies`
                        ? "relative font-bold h-full text-[#E7E9EA]"
                        : "text-[#71767B]"
                    } flex justify-center items-center text-base`}
                  >
                    <span>Replies</span>
                    <div
                      className={`${
                        location.pathname === `/${slug}/with_replies`
                          ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                          : ""
                      } `}
                    ></div>
                  </div>
                </NavLink>
              </div>
              <div className="w-full Media">
                <NavLink
                  to={`/${slug}/media`}
                  className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
                >
                  <div
                    className={`${
                      location.pathname === `/${slug}/media`
                        ? "relative font-bold h-full text-[#E7E9EA]"
                        : "text-[#71767B]"
                    } flex justify-center items-center text-base`}
                  >
                    <span>Media</span>
                    <div
                      className={`${
                        location.pathname === `/${slug}/media`
                          ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                          : ""
                      } `}
                    ></div>
                  </div>
                </NavLink>
              </div>
              <div className="w-full Media">
                <NavLink
                  to={`/${slug}/likes`}
                  className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
                >
                  <div
                    className={`${
                      location.pathname === `/${slug}/likes`
                        ? "relative font-bold h-full text-[#E7E9EA]"
                        : "text-[#71767B]"
                    } flex justify-center items-center text-base`}
                  >
                    <span>Likes</span>
                    <div
                      className={`${
                        location.pathname === `/${slug}/likes`
                          ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                          : ""
                      } `}
                    ></div>
                  </div>
                </NavLink>
              </div>
            </nav>
            <div className="tweets">
              {tweetOfOneUser.map((tweet) => {
                let author = users.find((user) => user.id === tweet.author);
                // console.log(author:);
                return (
                  <Tweet
                    key={tweet.id}
                    tweetTitleAuthor={author.name}
                    userName={author.handle}
                    dateTime={formatTimestamp(tweet.createdAt)}
                    tweetText={tweet.text}
                    replyValue={tweet.repliesCount}
                    retweetValue={tweet.retweetCount}
                    reactValue={tweet.favoriteCount}
                    tweetImage={tweet.media.length >= 0 && tweet.media[0]}
                    tweetAvatar={author.profilePicture}
                    slug={slug}
                    tweet={tweet}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="relative h-full">
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
            <h2 className="font-bold text-[#e6e9ea]">{currentUserId.pseudo}</h2>
            <span className="text-[13px] text-[#71767a]">1,129 posts</span>
          </div>
        </div>
        <div className="img_profils flex flex-col relative mb-20">
          <div className="couverture h-[12.5rem] w-full">
            {currentUserId.couvertureImage ? (
              <img
                src={currentUserId.couvertureImage}
                alt="Photo de couverture"
                className="h-full w-full object-cover object-center"
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
                src={currentUserId.profileImage}
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
        <div className="info-profil px-4 mb-12">
          <div className="identite mb-3 mt-1">
            <div>
              <span className="text-xl font-extrabold text-[#e7e9ea]">
                {currentUserId.pseudo}
              </span>
            </div>
            <div>
              <span className="text-base text-[#71767b]">
                {currentUserId.userName}
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
            <span className="text-base text-[#71767b]">
              Joined December 2020
            </span>
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
        <nav className="flex items-center justify-center border-b border-solid border-[#2f3336]">
          <div className="w-full posts">
            <NavLink
              to={`/${slug}`}
              className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
            >
              <div
                className={`${
                  location.pathname === `/${slug}`
                    ? "relative font-bold h-full text-[#E7E9EA]"
                    : "text-[#71767B]"
                } flex justify-center items-center text-base`}
              >
                <span>Posts</span>
                <div
                  className={`${
                    location.pathname === `/${slug}`
                      ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                      : ""
                  } `}
                ></div>
              </div>
            </NavLink>
          </div>
          <div className="w-full Replies">
            <NavLink
              to={`/${slug}/with_replies`}
              className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
            >
              <div
                className={`${
                  location.pathname === `/${slug}/with_replies`
                    ? "relative font-bold h-full text-[#E7E9EA]"
                    : "text-[#71767B]"
                } flex justify-center items-center text-base`}
              >
                <span>Replies</span>
                <div
                  className={`${
                    location.pathname === `/${slug}/with_replies`
                      ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                      : ""
                  } `}
                ></div>
              </div>
            </NavLink>
          </div>
          <div className="w-full Media">
            <NavLink
              to={`/${slug}/media`}
              className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
            >
              <div
                className={`${
                  location.pathname === `/${slug}/media`
                    ? "relative font-bold h-full text-[#E7E9EA]"
                    : "text-[#71767B]"
                } flex justify-center items-center text-base`}
              >
                <span>Media</span>
                <div
                  className={`${
                    location.pathname === `/${slug}/media`
                      ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                      : ""
                  } `}
                ></div>
              </div>
            </NavLink>
          </div>
          <div className="w-full Media">
            <NavLink
              to={`/${slug}/likes`}
              className={`px-4 relative flex flex-col justify-center items-center outline-none h-[53px] transition-all ease-in-out duration-[.2s] hover:bg-[#E7E9EA1A]`}
            >
              <div
                className={`${
                  location.pathname === `/${slug}/likes`
                    ? "relative font-bold h-full text-[#E7E9EA]"
                    : "text-[#71767B]"
                } flex justify-center items-center text-base`}
              >
                <span>Likes</span>
                <div
                  className={`${
                    location.pathname === `/${slug}/likes`
                      ? "absolute self-center bg-[#1d9bf0] h-1 bottom-0 inline-flex rounded-br-full rounded-t-full rounded-bl-full w-full min-w-14"
                      : ""
                  } `}
                ></div>
              </div>
            </NavLink>
          </div>
        </nav>
        <div className="tweets">
          {tweetsPerso
            .map((tweet) => (
              <Tweet
                key={tweet.id}
                tweetTitleAuthor={tweet.tweetTitleAuthor}
                userName={tweet.userName}
                dateTime={tweet.dateTime}
                tweetText={tweet.tweetText}
                replyValue={tweet.replyValue}
                retweetValue={tweet.retweetValue}
                reactValue={tweet.reactValue}
                tweetImage={tweet.tweetImage}
                tweetAvatar={tweet.tweetAvatar}
                slug={tweet.slug}
                tweet={tweet}
              />
            ))
            .reverse()}
        </div>
      </div>
    );
  }*/
}

export default OtherUser;
