import React from 'react'
import './QuestionCard.css'
import './ButtonContainer'
import ButtonContainer from './ButtonContainer';

const QuestionCard = ({ questionText }) => (
    <div className="question-card">
        <div className="question-card__question-text">
            {questionText }
        </div>
        <ButtonContainer buttonIndex="0" />
        <ButtonContainer buttonIndex="1" />
        <ButtonContainer buttonIndex="2" />
    </div>
)

export default QuestionCard