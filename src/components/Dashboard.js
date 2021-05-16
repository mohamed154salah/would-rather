import React, { Component } from "react";
import Question from "./Question";
import { Col } from "reactstrap";
import Nav from "./Nav";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AnswerdPoll from "./AnswerdPoll"
class Dashboard extends Component {
  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div>
        <Nav />
        <Tabs>
          <TabList>
            <Tab>Unanswerd</Tab>
            <Tab>Answerd</Tab>
          </TabList>

          <TabPanel>
          
            {unansweredQuestions.map((qid) => (
              <Col key={qid} sm="6" md="4">
                <Question id={qid} />
                <hr/>
              </Col>
            ))}
            
          </TabPanel>
          <TabPanel>
            <table id="students">
              <tbody>
                {answeredQuestions.map((qid) => (
                  <Col key={qid} sm="6" md="4">
                    <AnswerdPoll id={qid} />
                    <hr/>
                  </Col>
                ))}
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

Dashboard.propTypes = {
  answeredPolls: PropTypes.array,
  unansweredPolls: PropTypes.array,
};

function mapStateToProps({ question, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => question[b].timestamp - question[a].timestamp);
  const unansweredQuestions = Object.keys(question).filter(
    (qid) => !answeredQuestions.includes(qid)
  ).sort(
    (a, b) => question[b].timestamp - question[a].timestamp);;

  return {
    unansweredQuestions,
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(Dashboard);
