import { QUESTION_LIST } from './question-actions'

const initialState = {
    questionList: [
        {
            "question": "asdlkja;ldkjfa;ldfj;alkf",
            "answers": [
                {
                    "text": "1",
                    "score": 1
                },
                {
                    "text": "2",
                    "score": 2
                },
                {
                    "text": "3",
                    "score": 3
                }
            ]
        },
        {
            "question": "lj;lkjlk",
            "answers": [
                {
                    "text": "1",
                    "score": 1
                },
                {
                    "text": "2",
                    "score": 2
                },
                {
                    "text": "3",
                    "score": 3
                }
            ]
        },
        {
            "question": "asdfasdf",
            "answers": [
                {
                    "text": "1",
                    "score": 1
                },
                {
                    "text": "2",
                    "score": 2
                },
                {
                    "text": "3",
                    "score": 3
                }
            ]
        },
        {
            "question": "jhghdf",
            "answers": [
                {
                    "text": "1",
                    "score": 1
                },
                {
                    "text": "2",
                    "score": 2
                },
                {
                    "text": "3",
                    "score": 3
                }
            ]
        }
    ]
}

export default function questionReducers(state = initialState, action) {
    switch(action.type) {
        case QUESTION_LIST:
        return Object.assign({}, state, {
            questionList: action.questoinList
        })
        default:
        return state
    }
}