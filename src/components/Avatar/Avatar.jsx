import avatarImg from "/assets/avatars/avatar.webp";
import "./styles.css";

const Avatar = () => {
  return (
    <div className="avatar-container">
      <img src={avatarImg} alt="avatar" />
    </div>
  );
};

export default Avatar;
