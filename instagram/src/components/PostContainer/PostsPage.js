import React, { Component } from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      filterPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  searchPostsHandler = e => {
    //eslint-disable-next-line
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filterPosts: posts });
  };
  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer
          posts={
            this.state.filterPosts.length > 0
              ? this.state.filterPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
