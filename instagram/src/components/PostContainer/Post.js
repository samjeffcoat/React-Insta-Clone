import React, { Component } from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import Heart from "../../photos/heart.svg";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
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
        <CommentSection comments={this.props.post.comments} />
        <div>
          likes= {this.state.likes}
          <img onClick={this.incrementLikes} src={Heart} alt="likes" />
        </div>
      </div>
    );
  }
}

export default Post;
