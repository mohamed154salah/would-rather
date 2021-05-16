import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/shared";
import { Col } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Error from "./error";
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
    const { questions, id ,x} = this.props;
    if(questions===id&id===x){
      return <Route component={Error} />
    }
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
  let questions,questionAuthor,x
x=Object.values(question).filter(x => x.id === id)
  if(x.length>0){
    questions = question[id];
     questionAuthor = users[questions.author];
}
  else{
    return {i:1,c:1,b:1}
  }


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
