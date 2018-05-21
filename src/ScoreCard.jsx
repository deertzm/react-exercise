import React from 'react'
import './QuestionCard.css'

const ScoreCard = ({ scoreText }) => (
    <div className="question-card">
        <div className="question-card__question-text">
            {scoreText }
        </div>
    </div>
)

export default ScoreCard