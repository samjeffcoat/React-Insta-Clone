import React from "react";
import Heart from "../../photos/heart.svg";
const LikesSection = props => {
  return [
    <div className="like-section" onClick={props.incrementLikes}>
      <div className="heart-image">
        <img src={Heart} alt="like me" />
      </div>
      <p>{props.likes}</p>
    </div>
  ];
};

export default LikesSection;
