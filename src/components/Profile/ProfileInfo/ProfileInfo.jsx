import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img alt="background" src='https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg'></img>
      <div className={s.descriptionBar}>
        <img alt="users avatar" src={props.profile.photos.large} />
        <ProfileStatus status={"Hello my friends!"} />
      </div> 
    </div>
  );
};

export default ProfileInfo;
