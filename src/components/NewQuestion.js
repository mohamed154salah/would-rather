import { React, Component } from "react";
import { connect } from "react-redux";
import {  Route } from "react-router-dom";
import { handleSaveQuestion } from "../actions/shared";
import Home from './Home'

class NewQuestion extends Component {
  state = {
    finish:false,  
    option1: "",
    option2: "",
  };
  myChangeHandler = (event) => {
    event.preventDefault()
    let val = event.target.value;
    this.setState({ option1: val });
  };
  myChangeHandler2 = (event) => {
    event.preventDefault()
    let val = event.target.value;
    this.setState({ option2: val });
  };
  saveAnswer = (e) => {
    e.preventDefault();
    const{option1,option2}=this.state
    this.setState({finish:true})
    console.log(option1,option2);
    this.props.addQuestion(option1,option1);
   
  };
  render() {
      const{finish,option1,option2}=this.state
    const isValid = this.state.option1 === "" || this.state.option2 === "";
    if(finish===true){
        return <Route  path="/" component={Home}/>;

    }

    return (
      <form className="form">
        <h2>Wolud You Rather</h2>
        <input
          className="textarea"
          type="text"
          name="option1"
          value={option1}
          placeholder="first option"
          onChange={this.myChangeHandler}
        />
        <br />
        <p>OR</p>
        <input
          className="textarea"
          type="text"
          name="option2"
          placeholder="second option"
          value={option2}
          onChange={this.myChangeHandler2}
        />
        <br />

        <button className="bt" disabled={isValid} onClick={this.saveAnswer}>
          submit question
        </button>
      </form>
    );
  }
}
function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}
function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOne, optionTwo) => {
      dispatch(handleSaveQuestion(optionOne, optionTwo))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion);
