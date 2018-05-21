import { QUESTION_LIST } from './question-actions'

const initialState = {
    questionList: [
        {
            "question": "Lorem ipsum dolor sit amet?",
            "answers": [
                {
                    "text": "Car",
                    "score": 1
                },
                {
                    "text": "Bus",
                    "score": 2
                },
                {
                    "text": "Train",
                    "score": 3
                }
            ]
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing?",
            "answers": [
                {
                    "text": "4",
                    "score": 4
                },
                {
                    "text": "5",
                    "score": 5
                },
                {
                    "text": "6",
                    "score": 6
                }
            ]
        },
        {
            "question": "Lorem ipsum dolor?",
            "answers": [
                {
                    "text": "Left",
                    "score": 20
                },
                {
                    "text": "Right",
                    "score": 30
                },
                {
                    "text": "Up",
                    "score": 40
                }
            ]
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
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