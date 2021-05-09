import { combineReducers } from 'redux';
import authedUser from './authedUser'
import question from './question'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    question,
    users,
    loadingBar: loadingBarReducer,

})
