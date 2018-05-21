import React from 'react'
import './QuestionCard.css'
import './ButtonContainer'
import ButtonContainer from './ButtonContainer';
import Back from './Back'

const QuestionCard = ({ questionText }) => (
    <div className="question-card">
    <Back />
        <div className="question-card__question-text">
            {questionText }
        </div>
        <ButtonContainer buttonIndex="0" />
        <ButtonContainer buttonIndex="1" />
        <ButtonContainer buttonIndex="2" />
    </div>
)

export default QuestionCard