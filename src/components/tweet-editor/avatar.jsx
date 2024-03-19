import { useState, useEffect, useContext } from "react";

import AvatarImage from "../../assets/images/profile-photo.png";
import currentUserIdContext from "../../contexts/current-user-context";
import userContext from "../../contexts/users-context";

function Avatar() {
  const { currentUserId } = useContext(currentUserIdContext);
  const { users } = useContext(userContext);

  const getCurrentUser = users.find(
    (user) => user.id === currentUserId.loggedInUserId
  );
  // console.log(getCurrentUser);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(currentUserId);
  }, [currentUserId]);
  if (!userData || !getCurrentUser) {
    return <div className="loader"></div>;
  }
  return (
    <div className="avatar grow-0 shrink-0 basis-[4rem] h-[4rem] mt-4">
      <img
        src={getCurrentUser?.profilePicture}
        alt="Avatar"
        style={{
          width: "100%",
          height: "100%",
          clipPath: "circle(50% at center)",
        }}
        className=""
      />
    </div>
  );
}
export default Avatar;
