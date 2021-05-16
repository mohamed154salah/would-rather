import {
  RECEIVE_QUESTION,
  ADD_QUESTION,
  ANSWER_QUESTION,
} from "../actions/question";

export default function question(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.question,
      }

    case ADD_QUESTION:  
    const { question}=action
    return{
        ...state,
        [action.question.id]:question,
    }

    case ANSWER_QUESTION:
        const { authedUser, qid, answer } = action;

        return{
            ...state,
            [qid]:{...state[qid],
            [answer]:{...state[qid][answer],
             votes: state[qid][answer].votes.concat([authedUser])
            }}
        }
    default:
        return state

  }
}