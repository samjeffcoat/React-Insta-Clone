import React, { Component } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newCommentText: " "
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.newCommentText,
          username: "thevillageidiot"
        }
      ],
      newCommentText: " "
    });
  };
  /*
  incrementLikes = () => {
    this.setState(prevState => ({
      likes: ++prevState.likes
    }));
  };
  /*
  increaseLikes = id => {
    let newLikes = [...this.state.likes];
    newLikes = newLikes.map(like => {
      if (like.id === id) {
        like.likes++;
      }
      return like;
    });
    this.setState({ like: newLikes });
  };
*/
  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <CommentInput
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
          comment={this.state.newCommentText}
        />
      </div>
    );
  }
}

export default CommentSection;
