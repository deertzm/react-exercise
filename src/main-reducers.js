import { combineReducers } from 'redux'
import './question-reducers'
import './user-reducers'

const mainReducers = combineReducers({
    questionReducrs,
    userReducers
})

export default mainReducers