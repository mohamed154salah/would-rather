import {RECEIVE_USERS,ADD_QUESTION_TO_USER,ADD_USER_ANSWER} from '../actions/users'

export default function users(state={},action){

    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER: 
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    questions:state[action.authedUser].question.concat(action.qid)
                }
            }
        case ADD_USER_ANSWER: 
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].option,
                        [action.qid]:action.option
                    }
                    
                }
            }
        default:
            return state    
    }

}