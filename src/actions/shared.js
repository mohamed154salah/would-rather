import {
  getInitialData,
  saveQuestion,
  saveQuestionAnswer,
} from "../utils/api";
import { receiveQuestion, addQuestion, answerQuestion } from "./question";
import { receiveUsers, addQuestionToUser, addUserAnswer } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading'


 export function handleInitialData () {
    return (dispatch) => {
      dispatch(showLoading())
      return getInitialData()
        .then(({ users, question }) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestion(question))
          dispatch(hideLoading())
        })

    }
  } 

 export function handleSaveQuestion(optionOne,optionTwo){
     return(dispatch,getState)=>{
      dispatch(showLoading())
         const {authedUser}=getState()
         return saveQuestion({
          author: authedUser,
          optionOneText: optionOne,
          optionTwoText: optionTwo,
        })
         .then((question)=>{
             dispatch(addQuestion(question))
             dispatch(addQuestionToUser(authedUser,question.id))
         }) 
         .catch(e=>{
            console.warn('error in save question')
        })
     }
 } 


 export function handleSaveAnswer(Qid,answer){

    return(dispatch,getState)=>{
        const {authedUser}=getState()
        console.log(authedUser, Qid, answer)

        dispatch(answerQuestion(authedUser,Qid,answer))
        dispatch(addUserAnswer(authedUser,Qid,answer))
        return saveQuestionAnswer({authedUser,qid:Qid,answer})
        .catch(e=>{
            console.warn('error in save answer')
        })

    }

 }