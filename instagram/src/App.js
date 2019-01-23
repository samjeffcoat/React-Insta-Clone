import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";

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
      </div>
    );
  }
}

export default App;
