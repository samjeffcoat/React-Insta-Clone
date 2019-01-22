import React, { Component } from "react";
import Heart from "../../photos/heart.svg";
class Likes extends Component {
  render() {
    console.log("likes", this.props);
    return (
      <div
        onClick={() => {
          this, props.like(this.props.id);
        }}
      >
        {this.props.likes}
        <img className="likes" src={Heart} alt="likebutton" />
      </div>
    );
  }
}

export default Likes;
