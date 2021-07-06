import React, { Component } from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment} onChange={props.handleChange}>
      <input
        type="text"
        name="newCommentText"
        value={props.comment}
        placeholder="Add comment...."
      />
    </form>
  );
};

export default CommentInput;
