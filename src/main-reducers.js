import { combineReducers } from 'redux'
import questionReducers from './question-reducers'
import userReducers from './user-reducers'

const mainReducers = combineReducers({
    questionReducers,
    userReducers
})

export default mainReducers