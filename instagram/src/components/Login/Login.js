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
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLogin = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };
  render() {
    return (
      <div className="login">
        <div>
          <Form>
            <FormGroup>
              <Input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <Input
                type="text"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Form>
          <Button color="yellow" size="medium" onClick={this.state.handleLogin}>
            Log In
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
