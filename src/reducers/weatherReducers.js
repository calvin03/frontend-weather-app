import {FETCH_WEATHER} from './reducerTypes/weatherTypes'

const initialState = {
    weather: []
};


export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER:
        return {
          ...state,
          weather: action.payload
        };
      default:
        return state;
    }
  }