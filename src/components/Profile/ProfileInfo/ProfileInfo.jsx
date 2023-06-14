import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img src='https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg'></img>
      <div className={s.descriptionBar}>
        <img src={props.profile.photos.large} />
        ava + description
      </div> 
    </div>
  );
};

export default ProfileInfo;
