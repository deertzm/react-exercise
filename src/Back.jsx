import React from 'react'
import { connect } from 'react-redux'
import * as userActions from './user-actions'
import back_img from './before.svg'
import './Back.css'

const mapStateToProps = state => {
    return {
        userIndex: state.userReducers.userIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserIndex: (s) => {dispatch(userActions.getUserIndex(s))}
    }
}

class Back extends React.Component {
    constructor(props) {
        super(props)
        this.toggleClick = this.toggleClick.bind(this)
    }

    toggleClick() {
        this.props.setUserIndex(this.props.userIndex-1)
    }

    render() {
        let back
        if (this.props.userIndex > 0) {
            back = (
                <div className="back-button" onClick={this.toggleClick}>
                    <img src={back_img} />
                </div>
            )
        }
        else {
            back = ''
        }
        return back
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Back)