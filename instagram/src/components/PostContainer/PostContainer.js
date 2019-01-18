import React, { Component } from "react";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection";
class PostContainer extends Component {
  render() {
    return (
      <div>
        <Post />
        <CommentSection />
      </div>
    );
  }
}

export default PostContainer;
