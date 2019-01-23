import React, { Component } from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;
