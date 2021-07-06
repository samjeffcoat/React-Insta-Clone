import React from "react";
import "./PostContainer.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="thumbpost-wrapper">
        <img alt="header" className="thumbpost" src={props.thumbnailUrl} />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
