import React from "react";

const PostHeader = props => {
  return (
    <div>
      <div>
        <img alt="header" className="thumbpost" src={props.thumbnailUrl} />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
