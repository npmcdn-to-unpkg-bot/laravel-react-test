const fugaVal = (state = { fuga: 1 } , action) => {
    switch (action.type) {
        case 'INCREMENT':
            return ({
                fuga: state.fuga + 1
            })
        default:
            return state
    }
}

export default fugaVal