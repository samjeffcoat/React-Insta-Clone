import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
