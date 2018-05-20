import React from 'react'

const QuestionCard = ({ questionText }) => (
    <div className="question-card">
        <span className="question-card__question-text">
            {questionText }
        </span>
    </div>
)

export default QuestionCard