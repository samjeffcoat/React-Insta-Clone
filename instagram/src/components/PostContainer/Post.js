import React, { Component } from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  return (
    <div className="border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="image-wrapper">
        <img
          alt="post thumb"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
