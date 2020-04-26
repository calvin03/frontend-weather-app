import axios from "axios";
import {FETCH_WEATHER, FETCH_ESTABLISHMENT} from '../reducers/reducerTypes/weatherTypes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trackPromise } from "react-promise-tracker";


const apiUrl = process.env.REACT_APP_API_URL;

export const getWeather = (coordinates) => async (dispatch) => {
  try {
    const res = await  trackPromise(axios.post(`${apiUrl}/api/weather`, { coordinates }));


    if (res.data.data) {
      dispatch({
        type: FETCH_WEATHER,
        payload: res.data,
      });
      if(res.data.establishments){
        dispatch({
          type: FETCH_ESTABLISHMENT,
          payload: res.data.establishments,
        });
      }
    } else {
        toast.error('Please input valid fields');
    }
  } catch (error) {
    toast.error('Please input valid fields');
}
};
