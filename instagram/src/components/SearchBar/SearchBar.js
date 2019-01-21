import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup className="search">
            <Input type="text" id="sampleSearch" placeholder="Search" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
