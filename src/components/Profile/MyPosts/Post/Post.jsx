import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://vjoy.cc/wp-content/uploads/2020/11/avatarki-dlya-tik-toka2.jpg' />
      {props.messages}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
