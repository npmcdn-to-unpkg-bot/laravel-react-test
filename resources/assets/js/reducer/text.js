const text = (state = {
    isFetching: false,
    inputText: 'this is initial text',
    presentText: []
}, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT_TEXT':
            return Object.assign({}, state, {
                inputText: action.text
            })
        case 'REQUEST_POST_TEXT':
            return Object.assign({}, state, {
                isFetching: true,
                inputText: '',
                presentText: state.presentText
            })
        case 'SUCCESS_POST_TEXT':
            return Object.assign({}, state, {
                isFetching: false
            })
        default:
            return state
    }
}

export default text