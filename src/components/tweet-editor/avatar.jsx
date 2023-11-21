import AvatarImage from "../../assets/images/profile-photo.png"

function Avatar() {
  return (
    <div className="avatar">
      <img src={AvatarImage} alt="Avatar" />
    </div>
  );
}
export default Avatar;
