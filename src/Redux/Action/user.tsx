import axios from 'axios';
import {API_URL} from '../../Service/config';
import {setLoading} from './global';

export const userService = async (dataTokenType, dataToken) => dispatch => {
  try {
    dispatch(setLoading(false));
    const res = await axios.get(`${API_URL}/users`, {
      headers: {Authorization: `${dataTokenType} ${dataToken}`},
    });
    return res.data;
  } catch (error) {
    dispatch(setLoading(false));
    console.log('Error :', error);
  }
};
