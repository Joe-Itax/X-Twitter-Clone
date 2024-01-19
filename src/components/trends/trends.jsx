import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./trends.css";
import Button from "../Buttons/button";
import FollowBtn from "../Buttons/follow-btn";
// import Avatar from "../../assets/images/profile-photo.png"
import Avatar from "../../assets/images/tweet-profile-photo-2.png";
import Verified from "../../assets/icons/Verified.svg";

function Trends() {
  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  const navigate = useNavigate();
  const navigateToProfil = () => {
    navigate("/profil");
  };
  return (
    <>
      <div className="trends grow-0 shrink-0 basis-[300px] md:basis-[350px] lg:basis-[400px]">
        <div className="trends-header">
          <div
            className={`trends-header-input bg__gray${
              isFocus ? " inputFocus" : ""
            }`}
          >
            <label htmlFor="input">
              <i className="ri-search-line"></i>
            </label>
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              type="email"
              placeholder="Search"
              id="input"
            />
          </div>
        </div>

        <div className="trends-subs_premium bg__gray">
          <div className="trends-title">
            <span className="">Subscribe to Premium</span>
          </div>
          <div className="">
            <span className="">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </span>
          </div>
          <Button
            content="Subscribe"
            textColor="#fff"
            backgroundColor="#1d9bf0"
          />
        </div>

        <div className="trends__trends bg__gray">
          <div className="trends__trends-title-box">
            <div className="trends__trends-title">
              <span>Trends</span>
            </div>
            <div className="trends__trends-icon_parameter">
              <i className="ri-settings-5-line"></i>
            </div>
          </div>
          <div className="trends__trends-content">
            <div className="trends__trends-content-details-box">
              <div className="trends__trends-content-details">
                <span className="trending-localisation text-gray">
                  Trending in Congo - Kinshasa
                </span>
                <span className="trending-theme">Congo</span>
                <span className="trending-posts-count text-gray">
                  39.2K posts
                </span>
              </div>
              <div className="icon_more text-gray">
                <i className="ri-more-line"></i>
              </div>
            </div>
          </div>
          <div className="trends__trends-content">
            <div className="trends__trends-content-details-box">
              <div className="trends__trends-content-details">
                <span className="trending-localisation text-gray">
                  Trending in Congo - Kinshasa
                </span>
                <span className="trending-theme">Congo</span>
                <span className="trending-posts-count text-gray">
                  39.2K posts
                </span>
              </div>
              <div className="icon_more text-gray">
                <i className="ri-more-line"></i>
              </div>
            </div>
          </div>
          <div className="trends__trends-content">
            <div className="trends__trends-content-details-box">
              <div className="trends__trends-content-details">
                <span className="trending-localisation text-gray">
                  Trending in Congo - Kinshasa
                </span>
                <span className="trending-theme">Congo</span>
                <span className="trending-posts-count text-gray">
                  39.2K posts
                </span>
              </div>
              <div className="icon_more text-gray">
                <i className="ri-more-line"></i>
              </div>
            </div>
          </div>
          <Link to="/i/trends" className="show-more">
            Show more
          </Link>
        </div>

        <div className="trends__who-follow bg__gray">
          <div className="trends__trends-title-box">
            <div className="trends__trends-title">
              <span>Who to follow</span>
            </div>
          </div>
          <div
            className="trends__who-follow-content"
            onClick={navigateToProfil}
          >
            <Link to="account" className="link-to-profil">
              <div className="">
                <img alt="Avatar" src={Avatar} />
              </div>
              <div className="">
                <div className="title-profil">
                  <span className="">Electronic Arts</span>
                  <img alt="" src={Verified} style={{ width: "1rem" }} />
                </div>
                <span className="text-gray">@EA</span>
              </div>
            </Link>
            <div>
              <FollowBtn />
            </div>
          </div>
          <div
            className="trends__who-follow-content"
            onClick={navigateToProfil}
          >
            <Link to="account" className="link-to-profil">
              <div className="">
                <img alt="Avatar" src={Avatar} />
              </div>
              <div className="">
                <div className="title-profil">
                  <span className="">Electronic Arts</span>
                  <img alt="" src={Verified} style={{ width: "1rem" }} />
                </div>
                <span className="text-gray">@EA</span>
              </div>
            </Link>
            <div>
              <FollowBtn />
            </div>
          </div>
          <div
            className="trends__who-follow-content"
            onClick={navigateToProfil}
          >
            <Link to="account" className="link-to-profil">
              <div className="">
                <img alt="Avatar" src={Avatar} />
              </div>
              <div className="">
                <div className="title-profil">
                  <span className="">Electronic Arts</span>
                  <img alt="" src={Verified} style={{ width: "1rem" }} />
                </div>
                <span className="text-gray">@EA</span>
              </div>
            </Link>
            <div>
              <FollowBtn />
            </div>
          </div>
          <Link to="/i/connect_people" className="show-more">
            Show more
          </Link>
        </div>

        <div className="trends__trends-more">
          <Link to="https://twitter.com/tos" target="_blank">
            Terms of Service
          </Link>
          <Link to="https://twitter.com/privacy" target="_blank">
            Privacy Policy
          </Link>
          <Link
            to="https://support.twitter.com/articles/20170514"
            target="_blank"
          >
            Coockie Policy
          </Link>
          <Link
            to="https://help.twitter.com/resources/accessibility"
            target="_blank"
          >
            Accessibility
          </Link>
          <Link
            to="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            target="_blank"
          >
            Ads info
          </Link>
          <span>
            More <i className="ri-more-line"></i>
          </span>
          <span className="copyright">© 2023 X Corp.</span>
        </div>
        {/* <h1>Trends</h1> */}
      </div>
    </>
  );
}

export default Trends;
