import React from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'

const mapStateToProps = state => {
    return {
        userIndex: state.userReducers.userIndex,
        score: state.userReducers.score,
        questionList: state.questionReducers.questionList
    }
}

class QuestionCardContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let qt
        if (this.props.userIndex <= this.props.questionList.length - 1) {
            qt = <QuestionCard  questionText={this.props.questionList[this.props.userIndex].question} />
        }
        else {
            qt = <ScoreCard scoreText={"Your score is " + this.props.score} />
        }
        return qt
    }
}

export default connect(mapStateToProps, null)(QuestionCardContainer)