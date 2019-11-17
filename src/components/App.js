import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Routes from "../routes";

class App extends PureComponent {
  render() {
    return <Routes />;
  }
}

export default App;