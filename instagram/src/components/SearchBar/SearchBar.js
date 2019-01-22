import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./SearchBar.css";
import  Camera from "../../photos/camera-logo.svg";
import Instagram from "../../photos/instagram-logo.png";
import Compass from "../../photos/Compass-Symbol.png";
import Heart from "../../photos/heart.svg";
import User from "../../photos/user-icon.png";


class SearchBar extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup className="search">
            <Input type="text" id="sampleSearch" placeholder="Search" />
          </FormGroup>
        </Form>
        <div>
          <i class="fab fa-instagram" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
