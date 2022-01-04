import {combineReducers} from 'redux'
import Reducer from './reducer';

const rootReducer = combineReducers({
    todos:Reducer,
})
export default rootReducer;