import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./SearchBar.css";
import Camera from "../../photos/instagram.svg";
import Instagram from "../../photos/instagram-logo.png";
import Compass from "../../photos/Compass-Symbol.png";
import Heart from "../../photos/heart.svg";
import User from "../../photos/user-icon.png";
import "../SearchBar/SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-wrap">
        <div>
          <img alt="camera-logo" src={Camera} className="logo" />
          <img alt="inst-logo" src={Instagram} className="logo" />
        </div>
        <Form>
          <FormGroup className="search">
            <Input type="text" id="sampleSearch" placeholder="Search" />
          </FormGroup>
        </Form>
        <div>
          <img alt="compass" src={Compass} className="logo" />
          <img alt="heart" src={Heart} className="logo" />
          <img alt="user icon" src={User} className="logo" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
