import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControl/FormsControl";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post messages={p.messages} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.descriptionBar}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={addPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" validate={[required, maxLengthCreator(15)]}/>
      </div>
      <button>Add Post</button>
    </form>
  );
};

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;
