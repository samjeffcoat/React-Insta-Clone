import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const Comment = props => {
  return (
    <div className="comments">
      <span className="user">{props.comment.username} </span>
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

export default Comment;
