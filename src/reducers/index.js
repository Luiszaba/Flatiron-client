import { combineReducers } from 'redux';
import manageSongs from './manageSongs';

const rootReducer  = combineReducers({
    songs: manageSongs
})

export default rootReducer;