import { useState, useContext } from "react";

import { NavLink } from "react-router-dom";

import currentUserContext from "../../contexts/current-user-context";
// import twitterLogo from '../../assets/images/logoX.png';
import twitterLogo from "../../assets/icons/Twitter.svg";
import homeIcon from "../../assets/icons/Home-Fill.svg";
import exploreIcon from "../../assets/icons/Explore.svg";
import notifIcon from "../../assets/icons/Notifications.svg";
import messagesIcon from "../../assets/icons/Messages.svg";
import bookmarksIcon from "../../assets/icons/Bookmarks.svg";
import listIcon from "../../assets/icons/Lists.svg";
import profilIcon from "../../assets/icons/Profile.svg";
import moreIcon from "../../assets/icons/More.svg";
import verified from "../../assets/icons/Verified.svg";
import Avatar from "../../assets/images/profile-photo.png";
import Button from "../Buttons/button";
import "./sidebar.css";

function Sidebar() {
  const { currentUser } = useContext(currentUserContext);
  console.log(currentUser);
  return (
    <nav className="nav-sidebar grow-0 shrink-0 basis-[300px] mdd:basis-[300px]">
      <ul className="nav-links">
        <li>
          <NavLink to="/home" className="logo">
            <img src={twitterLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">
            <img src={homeIcon} />
            <span className="link-name">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
            <img src={exploreIcon} />
            <span className="link-name">Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <img src={notifIcon} />
            <span className="link-name">Notification</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages">
            <img src={messagesIcon} />
            <span className="link-name">Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks">
            <img src={bookmarksIcon} />
            <span className="link-name">Bookmarks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/lists">
            <img src={listIcon} />
            <span className="link-name">Lists</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${currentUser.slug}`}>
            <img src={profilIcon} />
            <span className="link-name">Profil</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/more">
            <img src={moreIcon} />
            <span className="link-name">More</span>
          </NavLink>
        </li>
        <li className="post-button-li">
          <NavLink to="/compose/tweet" className="post-button">
            <Button
              addClassName="post-button--button"
              content="Post"
              backgroundColor="#1d9bf0"
              textColor="#fff"
            />
          </NavLink>
        </li>
      </ul>
      <div className="my-profil">
        <div className="my-profil-title-box">
          <div style={{ display: "flex" }}>
            <img alt="Avatar" src={currentUser.profileImage} style={{ width: "4rem" }} />
          </div>
          <div className="detail-title-profil">
            <div className="title-profil">
              <span>{currentUser.pseudo}</span>
              {/* <img alt="" src={verified} style={{ width: "1rem" }} /> */}
            </div>
            <span className="text-gray">{currentUser.userName}</span>
          </div>
        </div>
        <div>
          <i className="ri-more-line"></i>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
