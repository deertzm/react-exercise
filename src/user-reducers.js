import {
    USER_ANSWERS,
    USER_SCORE,
    USER_INDEX
} from './user-actions'

const initialState = {
    "userIndex": 0,
    "answers": [0, 0, 0, 0],
    "score": 0
}

export default function userReducers(state=initialState, action) {
    switch(action.type) {
        case USER_INDEX:
        return Object.assign({}, state, {
            userIndex: state.userIndex
        })
        case USER_ANSWERS:
        return Object.assign({}, state, {
            userAnswers: state.userAnswers
        })
        case USER_SCORE:
        return Object.assign({}, state, {
            userScore: state.userScore
        })
        default:
        return state
    }
}