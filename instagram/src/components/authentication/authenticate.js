/*Inside that directory create a HOC called authenticate*/
import React from "react";

/*This component should be able to take in a component as an argument, and it will return a class component.*/

const authenticate = App =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };

export default authenticate;
