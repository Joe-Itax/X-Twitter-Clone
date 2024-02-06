import {useState, useEffect, useContext} from "react";

import AvatarImage from "../../assets/images/profile-photo.png"
import currentUserContext from "../../contexts/current-user-context";

function Avatar() {
  const { currentUser } = useContext(currentUserContext);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(currentUser)
  }, [currentUser]);
  if(!userData){
    return <div className="loader"></div>
  }
  return (
    <div className="avatar grow-0 shrink-0 basis-[4rem] h-[4rem] mt-4">
      <img src={userData.profileImage} alt="Avatar" style={{ width: "100%", height: "100%" , clipPath: "circle(50% at center)"}} className=""/>
    </div>
  );
}
export default Avatar;
