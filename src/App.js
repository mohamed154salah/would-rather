import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading";
import Login from "./components/Login";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Nav from './nav'
import "./App.css";
import "./index.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Login />
          <NewQuestion/>
         {/*  <div className='container'>
            <Login />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Home} />
                 {/*  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} /> }
                </div>}
          </div> */}
          
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state,{ authedUser }) {
  const user = state.authedUser ? state.users[state.authedUser] : null;

  return {
    authedUser: state.authedUser,
    loading: state.authedUser === null

  };
}
export default connect(mapStateToProps)(App);
