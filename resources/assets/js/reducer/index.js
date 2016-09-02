import { combineReducers } from 'redux'
import fugaVal from './fugaVal'
import text from './text'

const reducer = combineReducers({
    fugaVal,
    text
})

console.log(reducer(undefined, {type:null}));

export default reducer