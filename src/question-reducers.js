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
                    "text": "4",
                    "score": 1
                },
                {
                    "text": "5",
                    "score": 2
                },
                {
                    "text": "6",
                    "score": 3
                }
            ]
        },
        {
            "question": "asdfasdf",
            "answers": [
                {
                    "text": "7",
                    "score": 1
                },
                {
                    "text": "8",
                    "score": 2
                },
                {
                    "text": "9",
                    "score": 3
                }
            ]
        },
        {
            "question": "jhghdf",
            "answers": [
                {
                    "text": "Green",
                    "score": 1
                },
                {
                    "text": "Red",
                    "score": 2
                },
                {
                    "text": "Blue",
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