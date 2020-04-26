import {FETCH_WEATHER, FETCH_ESTABLISHMENT} from './reducerTypes/weatherTypes'

const initialState = {
    weather: [],
    establishment: []
};


export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER:
        return {
          ...state,
          weather: action.payload
        };
      case FETCH_ESTABLISHMENT:
        return {
          ...state,
          establishment: action.payload
        };
      default:
        return state;
    }
  }