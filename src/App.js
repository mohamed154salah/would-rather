import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {handleInitialData}  from './actions/shared'
import LoadingBar from "react-redux-loading";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Nav from './nav'
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App