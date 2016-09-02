import React from 'react'
import { connect } from 'react-redux'

import Form from '../component/Form'
import { changeInputText, postText } from '../action/index'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange: (text) => {
            dispatch(changeInputText(text))
        },
        handleSubmit: (text) => {
            dispatch(postText(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)