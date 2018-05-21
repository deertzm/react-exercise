import React from 'react'
import { connect } from 'react-redux'
import * as userActions from './user-actions'
import Button from './Button'

const mapStateToProps = state => {
    return {
        userIndex: state.userReducers.userIndex,
        userAnswers: state.userReducers.userAnswers,
        userScore: state.userReducers.userScore,
        questionList: state.questionReducers.questionList
    }
}

const mapDispatchToProps = dispatch => {
    console.log('dispatch')
    return {
        setUserIndex: (i) => {dispatch(userActions.getUserIndex(i))},
        setScore: (s) => {dispatch(userActions.getUserScore(s))},
        setAnswers: (a) => {dispatch(userActions.getUserAnswers(a))}
    }
}

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props)

        this.toggleClick = this.toggleClick.bind(this)
    }

    toggleClick(btnIndex) {
        let newans = this.props.userAnswers.slice()
        newans[this.props.userIndex] = this.props.questionList[this.props.userIndex].answers[this.props.buttonIndex].score
        let sc = 0
        for (var i = 0; i < this.props.questionList.length; i++) {
            sc += this.props.userAnswers[i]
        }
        let ix = this.props.userIndex + 1
        this.props.setScore(sc)
        this.props.setAnswers(newans)
        this.props.setUserIndex(ix)
    }

    render() {
        if (this.props.userIndex >= this.props.questionList.length) {
            return ''
        }
        else {
            return (
                <Button buttonText={this.props.questionList[this.props.userIndex].answers[this.props.buttonIndex].text}
                        toggleClick={() => this.toggleClick(this.props.buttonIndex)} />
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer)