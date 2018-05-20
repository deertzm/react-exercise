export const USER_ANSWERS = 'USER_ANSWERS'
export const USER_SCORE = 'USER_SCORE'

export function getUserAnswers(answers) {
    return {
        type: USER_ANSWERS,
        answers
    }
}

export function getUserScore(score) {
    return {
        type: USER_SCORE,
        score
    }
}