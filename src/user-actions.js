export const USER_ANSWERS = 'USER_ANSWERS'
export const USER_SCORE = 'USER_SCORE'
export const USER_INDEX = 'USER_INDEX'

export function getUserIndex(index) {
    return {
        type: USER_INDEX,
        userIndex: index
    }
}

export function getUserAnswers(answers) {
    return {
        type: USER_ANSWERS,
        userAnswers: answers
    }
}

export function getUserScore(score) {
    return {
        type: USER_SCORE,
        userScore: score
    }
}