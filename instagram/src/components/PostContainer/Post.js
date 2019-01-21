import React, { Component } from "react";

const Post = props => {
  return (
    <div>
      username= {props.post.username}
      thumbnailUrl= {props.post.thumbnailUrl}
    </div>
  );
};

export default Post;
