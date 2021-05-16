import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { handleSaveAnswer } from "../actions/shared";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
class AnswerQuestion extends Component {
    state = {
        finish:false,  
        option: "",
      };
      setval=(e)=> {
          console.log(this.state.option)
        this.setState({
            option: e.target.value
        })
      }
      
      saveAnswer = (e) => {
        e.preventDefault();
        const{option}=this.state
        this.setState({finish:true})
        console.log(option);
        this.props.addanswer(option);
       
      };
  render() {
    const{finish,option}=this.state
    const { questions } = this.props;
    if(finish===true){
        return <Route  path="/" component={Dashboard}/>;

    }
    return (
      <div>     
      <Nav/>
         <h2>Wolud You Rather</h2>
         <div>
        <input type="radio" value="optionOne"onClick={this.setval} name={questions.optionOne.text}/> {questions.optionOne.text}
        <br />

        <p>OR</p>

        <input type="radio" value="optionTwo" onClick={this.setval}  name={questions.optionTwo.text}/> {questions.optionTwo.text}
        <br />

      </div>
          

          <button className="bt" disabled={option === ''} onClick={this.saveAnswer}>
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
    questions,
    questionAuthor,
  }
}
function mapDispatchToProps(dispatch,props) {
    const { id } = props.match.params;
  return {
    addanswer: (answer) => {
        console.log(id, answer)

      dispatch(handleSaveAnswer(id, answer))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (AnswerQuestion);
