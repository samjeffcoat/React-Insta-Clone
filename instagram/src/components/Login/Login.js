import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      password: " "
    };
  }
  render() {
    return (
      <div className="login">
        <div>
          <Form>
            <FormGroup>
              <Input type="text" id="username" placeholder="username" />
              <Input type="text" id="password" placeholder="password" />
            </FormGroup>
          </Form>
          <Button />
        </div>
      </div>
    );
  }
}

export default Login;
