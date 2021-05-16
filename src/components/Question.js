import React, { Component } from "react";
import { CardBody, CardTitle, Card } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../index.css";

class Question extends Component {
  constuctor() {
    this.loadQuestionDetails = this.routeChange.bind(this);
  }
  QuestionDetails(e, questionId) {
    let path = `/question/` + questionId;
    this.props.history.push(path);
  }
  render() {
    const { question, user } = this.props;
    return (
      <Card onClick={(e) => this.QuestionDetails(e, question.id)}>
        <CardBody>
          <CardTitle>Would You Rather</CardTitle>
          <ul>
            {" "}
            <span className="sp">
              Asked by:{user[question.author].name}
              <img
                src={user[question.author].avatarURL}
                className="avatar"
                alt={`Avatar of ${user[question.author].name}`}
              />
            </span>
            <li>{question.optionOne.text}</li>
            <li>{question.optionTwo.text}</li>
          </ul>
        </CardBody>
      </Card>
    );
  }
}

function mapStateToProps({ question, users, authedUser }, { id }) {
  return {
    question: question[id],
    auth: authedUser,
    user: users,
  };
}

export default withRouter(connect(mapStateToProps, null)(Question));
