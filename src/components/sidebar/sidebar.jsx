import { NavLink } from 'react-router-dom';
// import twitterLogo from '../../assets/images/logoX.png';
import twitterLogo from '../../assets/icons/Twitter.svg';
import homeIcon from '../../assets/icons/Home-Fill.svg';
import exploreIcon from '../../assets/icons/Explore.svg';
import notifIcon from '../../assets/icons/Notifications.svg';
import messagesIcon from '../../assets/icons/Messages.svg';
import bookmarksIcon from '../../assets/icons/Bookmarks.svg';
import listIcon from '../../assets/icons/Lists.svg';
import profilIcon from '../../assets/icons/Profile.svg';
import moreIcon from '../../assets/icons/More.svg';
import PostButton from './post-button';
import './sidebar.css';

function Sidebar() {
  return (
    <nav className="nav-sidebar">
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
          <NavLink to="/profil">
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
            <PostButton />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
