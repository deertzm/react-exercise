import React from 'react'
import Back from './Back'
import './QuestionCard.css'

const ScoreCard = ({ scoreText }) => (
    <div className="question-card">
        <Back />
        <div className="question-card__question-text">
            {scoreText }
        </div>
    </div>
)

export default ScoreCard