import React, { Component } from "react";
import { connect } from "react-redux";
import "../index.css";
import Nav from "./Nav";

class Leaderboard extends Component {
  renderTableHeader() {
    let y = {
      name: "name",
      avatar: "avatar",
      questions: "questions",
      answers: "answers",
      Rank: "Rank",
    };
    let header = Object.keys(y);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  renderTableData() {
    return this.props.users.map((users, index) => {
      const { id, name, avatarURL, questions, answers } = users;
      return (
        <tr key={id}>
          <td>
            <img src={avatarURL} className="avatar" alt={`Avatar of ${name}`} />
          </td>
          <td>{name}</td>
          <td>{questions.length}</td>
          <td>{Object.keys(answers).length}</td>
          <td>{questions.length + Object.keys(answers).length}</td>
        </tr>
      );
    });
  }
  render() {

    return (
      <div>
      <Nav/>
        <h1 id="title">LeaderBoard</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>

            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({ users }) => {
  const Score = (user) =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => Score(b) - Score(a)),
  };
};

export default connect(mapStateToProps)(Leaderboard);
