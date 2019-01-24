import React, { Component } from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikesSection";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="image-wrapper">
          <img
            alt="post thumb"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <div>
          <LikeSection
            incrementLikes={this.incrementLikes}
            likes={this.state.likes}
          />
        </div>
        <div>
          <CommentSection comments={this.props.post.comments} />
        </div>
      </div>
    );
  }
}

export default Post;
