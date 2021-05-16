import React, { Component } from "react";
import { CardBody, CardTitle, Card } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../index.css";
class AnswerdPoll extends Component {
  render() {
    const { question, user, auth } = this.props;

    return (
      <div>
        <Card>
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
              <li
                className={
                  question.optionOne.votes.includes(auth) ? "mark" : " "
                }
              >
                {question.optionOne.text}{" "}
                <label className="lab" disabled={true}>
                  votes:{question.optionOne.votes.length} :
                  {parseInt(
                    100 *
                      (question.optionOne.votes.length /
                        (question.optionOne.votes.length +
                          question.optionTwo.votes.length))
                  )}
                  %
                </label>
              </li>
              <li
                className={
                  question.optionTwo.votes.includes(auth) ? "mark" : " "
                }
              >
                {question.optionTwo.text}{" "}
                <label className="lab" disabled={true}>
                  votes : {question.optionTwo.votes.length} :
                  {parseInt(
                    100 *
                      (question.optionTwo.votes.length /
                        (question.optionOne.votes.length +
                          question.optionTwo.votes.length))
                  )}
                  %
                </label>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
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

export default withRouter(connect(mapStateToProps, null)(AnswerdPoll));
