import AvatarImage from "../../assets/images/profile-photo.png"

function Avatar() {
  return (
    <div className="avatar grow-0 shrink-0 basis-[70px]">
      <img src={AvatarImage} alt="Avatar" className="max-w-full max-h-full rounded-[12px]"/>
    </div>
  );
}
export default Avatar;
