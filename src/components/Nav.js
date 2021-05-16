import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setUnauthedUser } from "../actions/authedUser";
import { NavLink } from "reactstrap";
import React, { Component, Fragment } from "react";
import "../index.css";

class Nav extends Component {
  state = {
    to_Login: false,
  };
  handelLogout = (e) => {
    this.props.setUnAuthedUser();
    this.setState({ to_Login: true });
  };
  render() {
    const { user } = this.props;
    const { to_Login } = this.state;

    if (to_Login === true) {
      console.log("tologin");
      return <Link to="/">Home</Link>;
    }
    return (
      <Fragment>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink tag={Link} to="/add">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="/leaderboard">
                LeaderBoard
              </NavLink>
            </li>
            <li> Welcome Back ({user.name})</li>
            <li>
              <img className="avatar" src={user.avatarURL} alt="logo" />
            </li>
            <li>
              <button onClick={this.handelLogout} className="btn">
                LOG OUT
              </button>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  const { users, authedUser } = state;
  const user = users[authedUser];
  return {
    user,
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUnAuthedUser: () => dispatch(setUnauthedUser()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
