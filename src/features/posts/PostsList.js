import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));
  return <section>{renderedPosts}</section>;
};

export default PostsList;
