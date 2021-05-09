export const RECEIVE_QUESTION='RECEIVE_QUESTION'
export const ADD_QUESTION='ADD_QUESTION'
export const ANSWER_QUESTION='ANSWER_QUESTION'

export function receiveQuestion(question){
    return{
        type:RECEIVE_QUESTION,
        question,
    }
}

export function addQuestion(question){

    return{
        type:ADD_QUESTION,
        question,
    }
}

export function answerQuestion(authedUser,qid,answer){
   return{
       type:ANSWER_QUESTION,
       authedUser,
       qid,
       answer,

   } 
}