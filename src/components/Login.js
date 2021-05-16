import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import "../index.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
  }
  state = {
    to_home: false,
    user_Id: null,
  };

  handleValueChange(event) {
    console.log(event.target.value);
    this.props.setAuthedUser(event.target.value);
    this.setState({ to_home: true });
  }

  render() {
    const { users } = this.props;

    return (
      <div className="login">
        <h1>WOULD RATHER LOGIN</h1>

        <form className="drob">
          <div>
            <select id="exa" onChange={this.handleValueChange}>
              <option>Select a user</option>
              {Object.keys(users).map(function (keyName, keyIndex) {
                return (
                  <option key={keyName} value={keyName}>
                    {users[keyName].name}
                  </option>
                );
              })}
            </select>
          </div>
          <div></div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthedUser: (id) => dispatch(setAuthedUser(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
