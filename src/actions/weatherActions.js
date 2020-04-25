import axios from "axios";
import {FETCH_WEATHER} from '../reducers/reducerTypes/weatherTypes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const apiUrl = process.env.REACT_APP_API_URL;

export const getWeather = (coordinates) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiUrl}/api/weather`, { coordinates });


    if (res.data.data) {
      dispatch({
        type: FETCH_WEATHER,
        payload: res.data,
      });
    } else {
        toast.error('Please input valid fields');
    }
  } catch (error) {
    toast.error('Please input valid fields');
}
};
