import {combineReducers} from 'redux';
import weatherReducers from './weatherReducers';


export default combineReducers({
    weather: weatherReducers,
})