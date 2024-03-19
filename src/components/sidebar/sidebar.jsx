import { useState, useContext, useEffect } from "react";

import { NavLink } from "react-router-dom";

import currentUserIdContext from "../../contexts/current-user-context";
import userContext from "../../contexts/users-context";
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
  let { currentUserId } = useContext(currentUserIdContext);
  currentUserId = currentUserId.loggedInUserId;
  const { users } = useContext(userContext);
  // console.log(currentUserId);
  let currentUserConnected = users.find((user) => user.id == currentUserId);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(currentUserConnected);
  }, [currentUserConnected]);

  // console.log("userData: ", userData);
  // if (userData) {
  //   return <div className="loader"></div>
  // } else {
  return (
    <nav className="nav-sidebar grow-0 shrink-0 basis-[300px] mdd:basis-[300px] sticky">
      {!userData ? (
        <div className="loader absolute translate-x-[-5O%] -translate-y-[-50%] left-2/4 top-[50%]"></div>
      ) : (
        <>
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
              <NavLink
                to={`/${userData?.handle.slice(1, userData?.handle.length)}`}
              >
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
              <div style={{ display: "flex", width: "4rem", height: "4rem" }}>
                <img
                  alt="Avatar"
                  src={userData?.profilePicture}
                  style={{ width: "100%", clipPath: "circle(50% at center)" }}
                />
              </div>
              <div className="detail-title-profil">
                <div className="title-profil">
                  <span>{userData?.name}</span>
                  {/* <img alt="" src={verified} style={{ width: "1rem" }} /> */}
                </div>
                <span className="text-gray">{userData?.handle}</span>
              </div>
            </div>
            <div>
              <i className="ri-more-line"></i>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Sidebar;
