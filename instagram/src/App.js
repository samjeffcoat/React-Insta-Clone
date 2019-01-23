import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import authenticate from "./components/authentication/authenticate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    console.log("CDM is working");
  }
  render() {
    return (
      <div className="App">
        <PostsPage />
        <authenticate />
      </div>
    );
  }
}

export default App;
