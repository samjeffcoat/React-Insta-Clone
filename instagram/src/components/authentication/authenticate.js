/*Inside that directory create a HOC called authenticate*/
import React from "react";
/*This component should be able to take in a component as an argument, and it will return a class component.*/

const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  };

export default authenticate;
