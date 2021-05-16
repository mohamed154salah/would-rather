import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/shared";
import { Col } from "reactstrap";
import Nav from "./Nav";
import "react-tabs/style/react-tabs.css";
import AnswerdPoll from "./AnswerdPoll";
class AnswerQuestion extends Component {
  state = {
    finish: false,
    option: "",
  };
  setval = (e) => {
    console.log(this.state.option);
    this.setState({
      option: e.target.value,
    });
  };

  saveAnswer = (e) => {
    e.preventDefault();
    const { option } = this.state;
    this.setState({ finish: true });
    console.log(option);
    this.props.addanswer(option);
  };
  render() {
    const { finish, option } = this.state;
    const { questions, id } = this.props;
    if (finish === true) {
      return (<div>
        <Nav />
        <table id="students">
          <tbody>
            <Col key={id} sm="6" md="4">
              <AnswerdPoll id={id} />
              <hr />
            </Col>
            
          </tbody>
        </table>
        </div>
      );
    }
    return (
      <div>
        <Nav />
        <h2>Wolud You Rather</h2>
        <div>
          <input
            type="radio"
            value="optionOne"
            onClick={this.setval}
            name={questions.optionOne.text}
          />{" "}
          {questions.optionOne.text}
          <br />
          <p>OR</p>
          <input
            type="radio"
            value="optionTwo"
            onClick={this.setval}
            name={questions.optionTwo.text}
          />{" "}
          {questions.optionTwo.text}
          <br />
        </div>

        <button
          className="bt"
          disabled={option === ""}
          onClick={this.saveAnswer}
        >
          submit question
        </button>
      </div>
    );
  }
}
function mapStateToProps({ question, users, authedUser }, { match }) {
  const { id } = match.params;
  const questions = question[id];

  const questionAuthor = users[questions.author];

  return {
    id,
    questions,
    questionAuthor,
  };
}
function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;
  return {
    addanswer: (answer) => {
      console.log(id, answer);

      dispatch(handleSaveAnswer(id, answer));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
