import {
    _saveQuestionAnswer,
    _saveQuestion,
    _getQuestions,
    _getUsers,
  } from "./_DATA";
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, question]) => ({
      users,
      question,
    }))
  }
  
  export function saveQuestion (question) {
    return _saveQuestion(question)
  }
  
  export function saveQuestionAnswer (info) {
    console.log(info)
    return _saveQuestionAnswer(info)
  }
  
