import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {
  
  let postsElements = props.posts.map(p => <Post messages={p.messages} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.descriptionBar}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
