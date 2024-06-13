import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { postsAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onAddPost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postsAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onAddPost}>
        <label htmlFor="postTitle">Post Title</label>
        <input
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label htmlFor="postContent">Post Content</label>
        <input
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        />
        <button>Add Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
