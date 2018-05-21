export const QUESTION_LIST = 'QUESTION_LIST'

export function getQuestionList(questionList) {
    return {
        type: QUESTION_LIST,
        questionList: questionList
    }
}