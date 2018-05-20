import React from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

const mapStateToProps = state => {
    return {
        userIndex: state.userReducers.userIndex,
        questionList: state.questionReducers.questionList
    }
}

class QuestionCardContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <QuestionCard  questionText={this.props.questionList[this.props.userIndex].question} />
        )
    }
}

export default connect(mapStateToProps, null)(QuestionCardContainer)