import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import { Button } from "reactstrap";
import dummyData from "./dummy-data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData
    };
  }
  render() {
    console.log(dummyData);
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
