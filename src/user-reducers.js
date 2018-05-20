import {
    USER_ANSWERS,
    USER_SCORE
} from './user-actions'

const initialState = {
    "answers": [0, 0, 0, 0],
    "score": 0
}

export default function userReducers(state=initialState, action) {
    switch(action.type) {
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