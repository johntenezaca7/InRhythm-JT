import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../action/index";

import Header from "./Header";
import Display from "./Display";

const css = require("./App.scss");

class App extends Component {
  componentWillMount() {
    this.props.fetchData("The Beatles");
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Display />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
