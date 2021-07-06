import React, { Component } from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="posts-container">
      {props.posts.map(banana => (
        <Post key={banana.imageUrl} post={banana} />
      ))}
    </div>
  );
};

export default PostContainer;
