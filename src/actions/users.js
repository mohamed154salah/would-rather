export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER='ADD_QUESTION_TO_USER'
export const ADD_USER_ANSWER='ADD_USER_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
} 
export function addQuestionToUser(authedUser, qid){
    return{
        type:ADD_QUESTION_TO_USER,
        authedUser,
        qid,
    }

}

export function addUserAnswer(authedUser,qid,option){
    return{
        type:ADD_USER_ANSWER,
        authedUser,
        qid,
        option,
    }

}