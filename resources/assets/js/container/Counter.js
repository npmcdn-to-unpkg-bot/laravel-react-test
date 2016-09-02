import React from 'react'
import { connect } from 'react-redux'

import Counter from '../component/Counter'
import { increment } from '../action/index'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => { dispatch(increment()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)